import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

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
    });

    return createStore(reducers, { ...state }, enhancers);
}
