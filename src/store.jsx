import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configureStore = (reducers) => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    return createStore(reducers, applyMiddleware(...middlewares));
};

const store = configureStore(reducers);

export default store;