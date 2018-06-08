import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Content, Layout, Navigation } from 'dayler-ui';
import '~/global.styl';

import { IntroductionRoute } from './routes';

class App extends Component {
    routes = [{
        component: IntroductionRoute,
        exact: true,
        icon: 'home',
        href: '/',
        title: 'Introduction',
    }];

    state = {
        expanded: true,
    };

    handleChangeNavState = expanded => {
        this.setState({ expanded });
    };

    render() {
        const { expanded } = this.state;

        return (
            <Router>
                <Layout>
                    <Navigation expanded={expanded}
                        onChange={this.handleChangeNavState}
                        routes={this.routes}
                    />
                    <Content expanded={expanded}>
                        <Switch>
                            {this.routes.map(route => (
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
            </Router>
        );
    }
}

export default hot(module)(App);
