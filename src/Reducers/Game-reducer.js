import { defaultState, nextRotation,canMoveTo, addBlockToGrid, randomShape, checkRows,} from '../utils';
import{
    MOVE_DOWN,
    MOVE_LEFT,
    MOVE_RIGHT,
    RESTART,
    RESUME,
    ROTATE,
    PAUSE,
    GAME_OVER
} from '../Actions'
const gameReducer=(state=defaultState(), action)=>{
    const { shape, grid, x, y, rotation, nextShape, score, isRunning }=state
    switch (action.type){
            case ROTATE:
                const newRotation= nextRotation(shape, rotation)
                if(canMoveTo(shape, grid, x, y, newRotation)){
                    return { ...state, rotation: newRotation}
                }
                return state;
            case MOVE_DOWN:
                const maybeY=y+1
                if(canMoveTo(shape, grid, x, maybeY, rotation)){
                    return{...state, y:maybeY}
                }
                const obj=addBlockToGrid(shape,grid,x,y,rotation)
                const newGrid=obj.grid
                const gameOver=obj.gameOver
                if(gameOver){
                const newState={...state}
                newState.grid=newGrid;
                newState.shape=0;
                }
                const newState=defaultState()
                newState.shape=nextShape
                newState.grid=newGrid
                newState.score=score
                newState.isRunning=isRunning

                newState.score=score+checkRows(newGrid)
                
                if(!canMoveTo(nextShape, newGrid, 0, 4, 0)){
                    console.log("Game should be over...")
                    newState.shape=0
                    return {...state,gameOver: true}
                }
                newState.score=score+checkRows(newGrid)
                return newState;
            case MOVE_LEFT:
                if(canMoveTo(shape, grid, x-1, y, rotation)){
                    return {...state, x: x-1 }
                }
                return state;
            case MOVE_RIGHT:   
            if(canMoveTo(shape, grid, x+1, y, rotation)){
                return{...state, x: x+1}
            }
                return state;
            case RESTART:
                return defaultState();
            case RESUME:
                return {...state, isRunning: true};
            case PAUSE:
                return {...state, isRunning: false};
            case GAME_OVER:
                return state;
            default:
                return state
    }
}
 export default gameReducer;