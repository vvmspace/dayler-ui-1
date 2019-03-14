import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { settings } from './settings';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function(history, state = { }) {
    const enhancers = composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunkMiddleware,
        ),
    );

    const reducers = combineReducers({
        router: connectRouter(history),
        settings,
    });

    return createStore(reducers, { ...state }, enhancers);
}
