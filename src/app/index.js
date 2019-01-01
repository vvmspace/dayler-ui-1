import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import {
    FlexContainer,
    ResponsiveContainer,
} from 'dayler-ui';

import { Navigation } from './components';
import { StorageService } from './services/storage';

import {
    ColorsContainer,
    RootContainer,
} from './containers';

import style from './stylus/base.styl';

@hot(module)
export class App extends Component {
    storage = new StorageService('dayler-ui');

    state = {
        simple: false,
    };

    handleViewChange = simple => {
        this.setState({ simple }, this.storage.set('simple', simple));
    };

    componentDidMount() {
        const simple = this.storage.get('simple');

        if (simple === null) {
            this.setState({ simple: false });
            this.storage.set('simple', false);
        } else {
            this.setState({ simple });
        }
    }

    render() {
        const { simple } = this.state;

        const responsiveContainerClasses = {
            container: classNames(
                style.responsiveContainer,
                {
                    [style.responsiveContainerMin]: simple,
                },
            ),
        };

        return <FlexContainer classes={{ container: style.flexContainer }}>
            <Navigation simple={simple} onChange={this.handleViewChange} />
            <ResponsiveContainer classes={responsiveContainerClasses}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={RootContainer} />
                        <Route exact path="/colors" component={ColorsContainer} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </ResponsiveContainer>
        </FlexContainer>;
    }
}
