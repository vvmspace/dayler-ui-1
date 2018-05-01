import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import 'ui'

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

export default class App extends Component {
    state = {
        expand: true,
        nav: [{
            link: '/',
            title: 'Typings',
            icon: 'type',
        }, {
            link: '/colors',
            title: 'Colors',
            icon: 'aperture',
        }, {
            link: '/panels',
            title: 'Panels',
            icon: 'copy',
        }, {
            link: '/icons',
            title: 'Icons',
            icon: 'feather',
        }, {
            link: '/buttons',
            title: 'Buttons',
            icon: 'command',
        }, {
            link: '/inputs',
            title: 'Inputs',
            icon: 'edit',
        }, {
            link: '/tabs',
            title: 'Tabs',
            icon: 'folder',
        }, {
            link: '/datepicker',
            title: 'Date Picker',
            icon: 'calendar',
        }, {
            link: '/snackbar',
            title: 'Snackbar',
            icon: 'droplet',
        }, {
            link: '/switches',
            title: 'Switches',
            icon: 'toggle-left',
        }, {
            link: '/chart',
            title: 'Chart',
            icon: 'activity',
        }]
    }

    handleExpand = state => {
        this.setState({ expand: state })
    }


    render() {
        const { expand, nav } = this.state

        return (
            <Router>
                <div className={`ui-app ${expand ? 'expand' : ''}`}>
                    <NavBar data={nav} expand={expand} onExpand={this.handleExpand} />
                     <Switch>
                         <Route exact path="/" component={Typings} />
                         <Route exact path="/colors" component={Colors} />
                         <Route exact path="/icons" component={Icons} />
                         <Route exact path="/buttons" component={Buttons} />
                         <Route exact path="/inputs" component={Inputs} />
                         <Route exact path="/panels" component={Panels} />
                         <Route exact path="/tabs" component={Tabs} />
                         <Route exact path="/datepicker" component={DatePicker} />
                         <Route exact path="/snackbar" component={Snackbar} />
                         <Route exact path="/switches" component={Switches} />
                         <Route exact path="/chart" component={Chart} />
                         <Redirect to="/" />
                     </Switch>
                </div>
            </Router>
        );
    }
}
