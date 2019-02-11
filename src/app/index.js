import React, { Component } from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { hot } from 'react-hot-loader';
import { Provider, connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import { FlexLayout } from 'dayler-ui';

import { Header } from './components';
import { AboutContainer } from './containers';
import createStore from './store';

import style from './style.styl';

const history = createBrowserHistory();
const store = createStore(history);

@hot(module)
@connect(reducers => ({ ...reducers }))
class AppContainer extends Component {
    render() {
        return <FlexLayout classes={{ container: style.layout }}>
            <Header />
            <Switch>
                <Route exact path="/" component={AboutContainer} />
                <Redirect to="/" />
            </Switch>
        </FlexLayout>;
    }
}

class App extends Component {
    render() {
        return <Provider store={store}>
            <Router history={history}>
                <AppContainer />
            </Router>
        </Provider>;
    }
}

export const bootstrap = node => {
    render(<App />, node);
};
