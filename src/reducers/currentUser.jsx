import {combineReducers} from 'redux';
import ActionTypes from "../constants/actions";
import API from "../api";

const info = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.currentUser.success:
            return action.response;
        case ActionTypes.currentUser.failure:
            return API.user.defaultUser;
        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.currentUser.request:
            return true;
        case ActionTypes.currentUser.success:
        case ActionTypes.currentUser.failure:
            return false;
        default:
            return state;
    }
};

export default combineReducers({info, isFetching});

export const getInfo = (state) => state.info;
export const getIsFetching = (state) => state.isFetching;