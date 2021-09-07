import { combineReducers } from "redux";
import BallReducer from "./ballReducer";
import BatReducer from "./batReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    bat : BatReducer,
    ball : BallReducer,
    user : userReducer
})

export default rootReducer
