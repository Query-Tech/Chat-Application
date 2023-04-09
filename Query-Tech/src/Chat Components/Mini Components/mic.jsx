import React, { useState, useEffect, useRef } from 'react';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [paused, setPaused] = useState(false);
  const [audioStream, setAudioStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);
  const [timer, setTimer] = useState(0);

  const mediaRecorderRef = useRef(null);
  const timerRef = useRef(null);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.addEventListener('dataavailable', (event) => {
      setAudioChunks((chunks) => [...chunks, event.data]);
    });
    mediaRecorder.addEventListener('stop', () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
      setAudioChunks([]);
      setRecording(false);
      setPaused(false);
      clearInterval(timerRef.current);
      setTimer(0);
    });
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setRecording(true);
    setAudioStream(stream);
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    setPaused(false);
    clearInterval(timerRef.current);
    setTimer(0);
  };

  const handlePauseRecording = () => {
    mediaRecorderRef.current.pause();
    setPaused(true);
    clearInterval(timerRef.current);
  };

  const handleResumeRecording = () => {
    mediaRecorderRef.current.resume();
    setPaused(false);
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (audioStream) {
        audioStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [audioStream]);

  return (
    <div>
      <button onClick={handleStartRecording} disabled={recording}>
        Start Recording
      </button>
      <button onClick={handleStopRecording} disabled={!recording && !paused}>
        Stop Recording
      </button>
      {recording && (
        <button onClick={handlePauseRecording} disabled={paused}>
          Pause Recording
        </button>
      )}
      {paused && (
        <button onClick={handleResumeRecording} disabled={recording}>
          Resume Recording
        </button>
      )}
      {audioUrl && (
        <div>
          <audio src={audioUrl} controls />
          <p>Recorded for {timer} seconds</p>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;