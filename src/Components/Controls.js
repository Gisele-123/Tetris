import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate} from '../Actions'

export default function Controls(props){
    const dispatch=useDispatch()
    const isRunning=useSelector((state)=>state.game.isRunning)
    const gameOver=useSelector((state)=>state.game.gameOver)


    return (
        <div className="controls">
            <button disabled={!isRunning||gameOver} className="control-button" onClick={(e)=>{
                if(!isRunning||gameOver){return}
                dispatch(moveLeft())
            }}>left</button>
              <button disabled={!isRunning||gameOver} className="control-button" onClick={(e)=>{
                if(!isRunning||gameOver){return}
                dispatch(moveRight())
            }}>Right</button>
  <button disabled={!isRunning||gameOver} className="control-button" onClick={(e)=>{
                if(!isRunning||gameOver){return}
                dispatch(rotate())
            }}>Rotate</button>
  <button disabled={!isRunning||gameOver} className="control-button" onClick={(e)=>{
                if(!isRunning||gameOver){return}
                dispatch(moveDown())
            }}>Down</button>
        </div>
    )
}