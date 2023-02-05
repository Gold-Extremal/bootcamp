import React from 'react';
import { useTimer } from 'use-timer';
import classes from './Management.module.css' 

function Management() {

  // const { time, start, pause, reset, status } = useTimer({
  //   initialTime: 902,
  //   endTime: 0,
  //   timerType: 'DECREMENTAL',
  // });

  // const humanReadable = (time) => {
  //   let n = ("0"+ Math.floor(time / 3600)).slice(-2) + ":" + ("0"+ Math.floor((time % 3600)/60)).slice(-2) + ":" + ("0"+ Math.floor((time % 3600)%60)).slice(-2);
  //   return n ;
  // }

  return (
    <div className="Management">
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
}

export default Management;