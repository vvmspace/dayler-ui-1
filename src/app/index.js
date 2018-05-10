import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Avatars from './routes/avatars.route';
import Buttons from './routes/buttons.route';
import Charts from './routes/charts.route';
import Colors from './routes/colors.route';
import ImageCrop from './routes/crop.route';
import DatePicker from './routes/datepicker.route';
import Icons from './routes/icons.route';
import Inputs from './routes/inputs.route';
import Panels from './routes/panels.route';
import Snackbar from './routes/snackbar.route';
import Switches from './routes/switches.route';
import Tabs from './routes/tabs.route';
import Typings from './routes/typings.route';
import styles from './styles.styl';

export default class App extends Component {
    state = {
        expand: localStorage.getItem('isExpanded') !== null
            ? JSON.parse(localStorage.getItem('isExpanded'))
            : true,
        nav: [{
            component: Typings,
            exact: false,
            icon: 'type',
            link: '/typings',
            title: 'Typings',
            visible: false,
        }, {
            component: Avatars,
            exact: true,
            icon: 'user-plus',
            link: '/',
            title: 'Avatars',
            visible: true,
        }, {
            component: Buttons,
            icon: 'server',
            link: '/buttons',
            title: 'Buttons',
            visible: true,
        }, {
            component: Charts,
            icon: 'activity',
            link: '/charts',
            title: 'Charts',
            visible: false,
        }, {
            component: Colors,
            icon: 'aperture',
            link: '/colors',
            title: 'Colors',
            visible: true,
        }, {
            component: DatePicker,
            icon: 'calendar',
            link: '/datepicker',
            title: 'Date Picker',
            visible: false,
        }, {
            component: Icons,
            icon: 'feather',
            link: '/icons',
            title: 'Icons',
            visible: true,
        }, {
            component: ImageCrop,
            icon: 'crop',
            link: '/crop',
            title: 'Image Crop',
            visible: true,
        }, {
            component: Inputs,
            icon: 'edit',
            link: '/inputs',
            title: 'Inputs',
            visible: true,
        }, {
            component: Panels,
            icon: 'copy',
            link: '/panels',
            title: 'Panels',
            visible: true,
        }, {
            component: Snackbar,
            icon: 'droplet',
            link: '/snackbar',
            title: 'Snackbar',
            visible: true,
        }, {
            component: Switches,
            icon: 'toggle-left',
            link: '/switches',
            title: 'Switches',
            visible: true,
        }, {
            component: Tabs,
            icon: 'folder',
            link: '/tabs',
            title: 'Tabs',
            visible: true,
        }],
    }

    handleExpand = state => {
        this.setState({ expand: state }, () => localStorage.setItem('isExpanded', state));
    }

    render() {
        const { expand, nav } = this.state;

        return (
            <Router>
                <div className={`${styles.app} ${expand ? styles.appExpanded : ''}`}>
                    <NavBar data={nav} expand={expand} onExpand={this.handleExpand} />
                    <Switch>
                        {nav.map(route => (
                            <Route key={route.link}
                                exact={route.exact}
                                path={route.link}
                                component={route.component}
                            />
                        ))}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        );
    }
}
