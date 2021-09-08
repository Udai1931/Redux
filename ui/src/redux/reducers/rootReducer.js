import {combineReducers} from 'redux';
import documentReducer from './documentReducer';
import contactReducer from './contactReducer';
import educationReducer from './educationReducer';
import authReducer from './authReducer';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth:authReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    document:documentReducer,
    contact : contactReducer,
    education : educationReducer,
})

export default rootReducer