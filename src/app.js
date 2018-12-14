import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Flex } from 'dayler-ui';

import { ColorsRoute, MainRoute } from './routes';

@hot(module)
export class App extends Component {
    render() {
        return <Flex vertical>
            <Router>
                <Switch>
                    <Route exact path="/" component={MainRoute} />
                    <Route exact path="/colors" component={ColorsRoute} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </Flex>;
    }
}
