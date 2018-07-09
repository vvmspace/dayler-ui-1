import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Content, Layout, Navigation } from 'dayler-ui';
import '~/global.styl';

import { ExampleRoute } from './routes';

class App extends Component {
    routes = [{
        component: ExampleRoute,
        exact: true,
        icon: 'box',
        href: '/',
        title: 'Setup',
    }, {
        component: ExampleRoute,
        exact: false,
        icon: 'book',
        href: '/basics',
        title: 'Basics',
    }, {
        component: ExampleRoute,
        exact: false,
        icon: 'feather',
        href: '/icons',
        title: 'Feather Icons',
    }, {
        component: ExampleRoute,
        exact: false,
        icon: 'grid',
        href: '/buttons',
        title: 'Buttons',
    }, {
        component: ExampleRoute,
        exact: false,
        icon: 'crop',
        href: '/imagecrop',
        title: 'Image Crop',
    }, {
        component: ExampleRoute,
        exact: false,
        icon: 'terminal',
        href: '/forms',
        title: 'Forms',
    }, {
        component: ExampleRoute,
        exact: false,
        icon: 'layers',
        href: '/snack',
        title: 'Snakbar',
    }, {
        component: ExampleRoute,
        exact: false,
        icon: 'toggle-left',
        href: '/switches',
        title: 'Switches',
    }, {
        component: ExampleRoute,
        exact: false,
        icon: 'folder',
        href: '/tabs',
        title: 'Tabs',
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
