import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Content, Layout, Navigation } from 'dayler-ui';
import '~/global.styl';

import {
    ButtonsRoute,
    FeatherIconsRoute,
    FormsRoute,
    ImageCropRoute,
    OverviewRoute,
    SetupRoute,
    SnakbarRoute,
    SwitchesRoute,
    TabsRoute,
} from './routes';


class App extends Component {
    routes = [{
        component: SetupRoute,
        exact: true,
        icon: 'box',
        href: '/',
        title: 'Setup',
    }, {
        component: OverviewRoute,
        exact: false,
        icon: 'book',
        href: '/overview',
        title: 'Overview',
    }, {
        component: FeatherIconsRoute,
        exact: false,
        icon: 'feather',
        href: '/icons',
        title: 'Feather Icons',
    }, {
        component: ButtonsRoute,
        exact: false,
        icon: 'grid',
        href: '/buttons',
        title: 'Buttons',
    }, {
        component: ImageCropRoute,
        exact: false,
        icon: 'crop',
        href: '/imagecrop',
        title: 'Image Crop',
    }, {
        component: FormsRoute,
        exact: false,
        icon: 'terminal',
        href: '/forms',
        title: 'Forms',
    }, {
        component: SnakbarRoute,
        exact: false,
        icon: 'layers',
        href: '/snack',
        title: 'Snakbar',
    }, {
        component: SwitchesRoute,
        exact: false,
        icon: 'toggle-left',
        href: '/switches',
        title: 'Switches',
    }, {
        component: TabsRoute,
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
