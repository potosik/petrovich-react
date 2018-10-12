import {combineReducers} from 'redux';

import currentUser, * as FromCurrentUser from './currentUser'

const reducers = combineReducers({
    currentUser,
});

export default reducers;

export const getCurrentUserInfo = (state) => FromCurrentUser.getInfo(state.currentUser);
export const getCurrentUserIsFetching = (state) => FromCurrentUser.getIsFetching(state.currentUser);