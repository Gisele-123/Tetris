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
import { defaultState } from '../utils';

const gameReducer=(state=defaultState(), action)=>{
    switch (action.type){
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
            case ROTATE:
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