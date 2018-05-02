import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Buttons from './routes/buttons.route';
import Chart from './routes/chart.route';
import Colors from './routes/colors.route';
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
            link: '/',
            title: 'Typings',
            icon: 'type',
            component: Typings,
        }, {
            link: '/colors',
            title: 'Colors',
            icon: 'aperture',
            component: Colors,
            visible: true,
        }, {
            link: '/panels',
            title: 'Panels',
            icon: 'copy',
            component: Panels,
            visible: true,
        }, {
            link: '/icons',
            title: 'Icons',
            icon: 'feather',
            component: Icons,
            visible: true,
        }, {
            link: '/buttons',
            title: 'Buttons',
            icon: 'server',
            component: Buttons,
            visible: true,
        }, {
            link: '/inputs',
            title: 'Inputs',
            icon: 'edit',
            component: Inputs,
            visible: true,
        }, {
            link: '/tabs',
            title: 'Tabs',
            icon: 'folder',
            component: Tabs,
            visible: false,
        }, {
            link: '/datepicker',
            title: 'Date Picker',
            icon: 'calendar',
            component: DatePicker,
            visible: false,
        }, {
            link: '/snackbar',
            title: 'Snackbar',
            icon: 'droplet',
            component: Snackbar,
            visible: false,
        }, {
            link: '/switches',
            title: 'Switches',
            icon: 'toggle-left',
            component: Switches,
            visible: false,
        }, {
            link: '/chart',
            title: 'Chart',
            icon: 'activity',
            component: Chart,
            visible: false,
        }]
    }

    handleExpand = state => {
        this.setState({ expand: state }, () => localStorage.setItem('isExpanded', state))
    }

    render() {
        const { expand, nav } = this.state

        return (
            <Router>
                <div className={`${styles.app} ${expand ? styles.appExpanded : ''}`}>
                    <NavBar data={nav} expand={expand} onExpand={this.handleExpand} />
                    <Switch>
                        {nav.map(route => (
                            <Route key={route.link}
                                exact
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
