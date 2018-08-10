import '~/global.styl';

import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Content, Layout, Navigation } from 'dayler-ui';

import RoutesSchema from './routes';

class App extends Component {
    state = {
        expanded: true,
    };

    handleChangeNavState = expanded => {
        this.setState({ expanded });
    };

    render() {
        const { expanded } = this.state;

        return <Router>
            <Layout>
                <Navigation expanded={expanded}
                    onChange={this.handleChangeNavState}
                    routes={RoutesSchema}
                />
                <Content expanded={expanded}>
                    <Switch>
                        {RoutesSchema.map(route => (
                            <Route key={route.href}
                                exact={route.exact}
                                path={route.href}
                                component={route.component}
                            />
                        ))}
                        <Redirect to="/" />
                    </Switch>
                </Content>
            </Layout>
        </Router>;
    }
}

export default hot(module)(App);
