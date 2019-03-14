import { createAction, createReducer } from 'redux-act';

export const fetchSettingsStartAction = createAction('fetch settings :: start');
export const fetchSettingsSuccessAction = createAction('fetch settings :: success');
export const fetchSettingsErrortAction = createAction('fetch settings :: error');

const state = {
    // fetch state
    isFetching: false,
    error: { },

    // data state
    serverStatus: 0,
};

export default createReducer({
    [fetchSettingsStartAction]: store => ({
        ...store,
        isFetching: true,
        error: { },
    }),
    [fetchSettingsSuccessAction]: (store, settings) => ({
        ...store,
        isFetching: false,
        serverStatus: settings.serverStatus,
    }),
    [fetchSettingsErrortAction]: (store, error) => ({
        ...store,
        error,
        isFetching: false,
    }),
}, state);
