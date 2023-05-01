import { defaultState, nextRotation,canMoveTo,} from '../utils';
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
                return state;
            case MOVE_LEFT:
                return state;
            case MOVE_RIGHT:
                return state;
            case RESTART:
                return state;
            case RESUME:
                return state;
            case PAUSE:
                return state;
            case GAME_OVER:
                return state;
            default:
                return state
    }
}
 export default gameReducer