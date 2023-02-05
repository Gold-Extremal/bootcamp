import React from 'react';
import { useTimer } from 'use-timer';
import classes from './Clock.module.css'
import arrow from './arrow.svg'

function Clock() {
  
  const { time, start, pause, reset, status } = useTimer({
    initialTime: 902,
    endTime: 0,
    timerType: 'DECREMENTAL',
  });

  const humanReadable = (time) => {
    let n = ("0"+ Math.floor(time / 3600)).slice(-2) + ":" + ("0"+ Math.floor((time % 3600)/60)).slice(-2) + ":" + ("0"+ Math.floor((time % 3600)%60)).slice(-2);
    return n ;
  }

  return (
    <div>
      <div className={classes.clock}>
        <div className={classes.border}></div>
        <p className={classes.timeValue}>{humanReadable(time)}</p>
      </div>

      <div className={classes.menu}>
      <button className={classes.btn} onClick={pause}>Pause</button>
        <button className={classes.start} onClick={start}><img src={arrow}></img></button>
        <button className={classes.btn} onClick={reset}>Reset</button>
      </div>
    </div>
    
  );
}

export default Clock;