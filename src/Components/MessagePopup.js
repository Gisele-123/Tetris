import React from 'react';
import { useSelector } from 'react-redux';

export default function MessagePopup(props){
    const isRunning=useSelector((state)=>state.isRunning)
    const gameOver=useSelector((state)=>state.gameOver)
     let message=''
     let isHidden='hidden'
      if (gameOver){
        message='Game over'
        isHidden=''
      }else if(!isRunning){
        message='Paused'
        isHidden=''
      }
    return (
        <div className={`message-popup ${isHidden}`}>
            <h1>{message}</h1>
        </div>
    )
}