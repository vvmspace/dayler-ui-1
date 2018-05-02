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
        }, {
            link: '/panels',
            title: 'Panels',
            icon: 'copy',
            component: Panels,
        }, {
            link: '/icons',
            title: 'Icons',
            icon: 'feather',
            component: Icons,
        }, {
            link: '/buttons',
            title: 'Buttons',
            icon: 'server',
            component: Buttons,
        }, {
            link: '/inputs',
            title: 'Inputs',
            icon: 'edit',
            component: Inputs,
        }, {
            link: '/tabs',
            title: 'Tabs',
            icon: 'folder',
            component: Tabs,
        }, {
            link: '/datepicker',
            title: 'Date Picker',
            icon: 'calendar',
            component: DatePicker,
        }, {
            link: '/snackbar',
            title: 'Snackbar',
            icon: 'droplet',
            component: Snackbar,
        }, {
            link: '/switches',
            title: 'Switches',
            icon: 'toggle-left',
            component: Switches,
        }, {
            link: '/chart',
            title: 'Chart',
            icon: 'activity',
            component: Chart,
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
