import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';

import Buttons from './routes/buttons.route';
import Colors from './routes/colors.route';
import DatePicker from './routes/datepicker.route';
import Grid from './routes/grid.route';
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
            link: '/grid',
            title: 'Grid',
            icon: 'corner-left-down',
        }, {
            link: '/colors',
            title: 'Colors',
            icon: 'file-text',
        }, {
            link: '/icons',
            title: 'Icons',
            icon: 'book',
        }, {
            link: '/buttons',
            title: 'Buttons',
            icon: 'tablet',
        }, {
            link: '/inputs',
            title: 'Inputs',
            icon: 'align-left',
        }, {
            link: '/panels',
            title: 'Panels',
            icon: 'bell-off',
        }, {
            link: '/tabs',
            title: 'Tabs',
            icon: 'alert-circle',
        }, {
            link: '/datepicker',
            title: 'Date Picker',
            icon: 'date',
        }, {
            link: '/snackbar',
            title: 'Snackbar',
            icon: 'droplet',
        }, {
            link: '/switches',
            title: 'Switches',
            icon: 'chevron-right',
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
                         <Route exact path="/grid" component={Grid} />
                         <Route exact path="/colors" component={Colors} />
                         <Route exact path="/icons" component={Icons} />
                         <Route exact path="/buttons" component={Buttons} />
                         <Route exact path="/inputs" component={Inputs} />
                         <Route exact path="/panels" component={Panels} />
                         <Route exact path="/tabs" component={Tabs} />
                         <Route exact path="/datepicker" component={DatePicker} />
                         <Route exact path="/snackbar" component={Snackbar} />
                         <Route exact path="/switches" component={Switches} />
                         <Redirect to="/" />
                     </Switch>
                </div>
            </Router>
        );
    }
}
