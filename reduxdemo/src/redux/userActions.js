import axios from 'axios';
import * as actionTypes from './actions';
export const fetchUsers = () => {
    return{
        type:actionTypes.FETCH_USERS_REQUEST
    }
}

export const fetchSuccess = (users) => {
    return{
        type:actionTypes.FETCH_USERS_SUCCESS,
        payload:users
    }
}

export const fetchFailed = (error) => {
    return{
        type:actionTypes.FETCH_USERS_FAILED,
        payload: error
    }
}

export const getUsers = () => {
    return async(dispatch) => {
        dispatch(fetchUsers());
        try{
            let res = await axios.get('https://jsonplaceholder.typicode.com/user');
            let data = res.data;
            dispatch(fetchSuccess(data))
        }catch(error){
            dispatch(fetchFailed(error.message))
        }
    }
}