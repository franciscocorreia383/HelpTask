import React, { useState, useEffect } from 'react';

function Pomodoro(){
    const [time, setTime] = useState(1500); // Tempo inicial em segundos (25 minutos)
    const [running, setRunning] = useState(false);
    const [completedPomodoros, setCompletedPomodoros] = useState(0);
  
    useEffect(() => {
      let interval;
  
      if (running && time > 0) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
      } else if (time === 0) {
        clearInterval(interval);
        setRunning(false);
        handlePomodoroCompletion();
        playBeep()
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [running, time, completedPomodoros]);
  
    const handlePomodoroCompletion = () => {
      if (completedPomodoros < 3) {
        // Descanso de 5 minutos para as 3 primeiras vezes
        setTime(300);
      } else {
        // Descanso de 15 minutos a partir da quarta vez
        setTime(900);
        setCompletedPomodoros(0); // Reinicia o contador após o descanso longo
      }
  
      setCompletedPomodoros((prev) => prev + 1);
    };
  
    const startTimer = () => {
      setRunning(true);
    };
  
    const pauseTimer = () => {
      setRunning(false);
    };
  
    const resetTimer = () => {
      setTime(5);
      setRunning(false);
    };

    const playBeep = () => {
        try {
          const beepSound = require(`./start.mp3`);
          const beep = new Audio(beepSound.default);
          beep.play();
        } catch (error) {
          console.error("Erro ao reproduzir o som:", error);
        }
      };
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };
  
    return (
      <div>
        <h1>{formatTime(time)}</h1>
        <div>
          <button onClick={startTimer} disabled={running}>
            Start
          </button>
          <button onClick={pauseTimer} disabled={!running}>
            Pause
          </button>
          <button onClick={resetTimer}>Reset</button>
        </div>
        <p>Completed Pomodoros: {completedPomodoros}</p>
      </div>
    );
};

export default Pomodoro;
