import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import mockAxios from 'axios';

import App, { history, store } from '../src/app';
import MainRoute from '../src/app/routes/main';

describe('example test suite', () => {
    test('example app snapshot', () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    email: '',
                },
            })
        );

        const app = mount(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Router initialEntries={[ '/' ]}>
                        <App />
                    </Router>
                </ConnectedRouter>
            </Provider>
        );

        const mainRoutePage = app.find(MainRoute).childAt(0).instance();
        expect(mainRoutePage.props.user.email).toBe('');
    });
});
