import React, { PureComponent, Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';

import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import { FlexLayout } from 'dayler-ui';

import createStore from './store';
import { Header } from './components';

import style from './style.styl';

const AboutContainer = lazy(() => import('./containers/AboutContainer'));

@hot
@connect(store => ({ ...store }))
class AppContainer extends PureComponent {
    render() {
        return <FlexLayout classes={{ container: style.layout }}>
            <Header />
            <Suspense fallback={null}>
                <Switch>
                    <Route exact path={['/']} render={props => <AboutContainer {...props} />} />

                    <Redirect to="/" />
                </Switch>
            </Suspense>
        </FlexLayout>;
    }
}

export const App = () => {
    const history = createBrowserHistory();
    const store = createStore(history);

    return <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer />
        </ConnectedRouter>
    </Provider>;
};

export const bootstrap = node => {
    render(<App />, node);
};

Route.propTypes = {
    ...Route.propTypes,
    path: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
