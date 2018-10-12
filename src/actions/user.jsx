import API from "../api";
import ActionTypes from "../constants/actions";
import {getCurrentUserIsFetching} from "../reducers";

export const getCurrentUser = () => (dispatch, getState) => {
    if (getCurrentUserIsFetching(getState())) {
        return Promise.resolve();
    }

    dispatch({
        type: ActionTypes.currentUser.request
    });

    return API.user.fetchCurrentUserInfo().then(
        response => {
            dispatch({
                type: ActionTypes.currentUser.success,
                response
            });
        },
        error => {
            dispatch({
                type: ActionTypes.currentUser.failure,
                message: error.message || 'Something went wrong'
            });
        }
    );
};