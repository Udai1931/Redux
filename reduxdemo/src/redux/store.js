import {createStore,applyMiddleware} from 'redux';
import BatReducer from './batReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import BallReducer from './ballReducer';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
 
export default store;  