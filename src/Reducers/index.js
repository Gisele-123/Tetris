import { combineReducers } from "redux";
 import gameReducer from "./Game-reducer";

  const reducers = combineReducers({
    game: gameReducer
  })
  export default reducers