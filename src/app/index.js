import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import {
    FlexContainer,
    ResponsiveContainer,
} from 'dayler-ui';

import { Navigation } from './components';
import { StorageService } from './services/storage';

import {
    BadgesContainer,
    ButtonsContainer,
    ChartsContainer,
    CheckboxesContainer,
    ColorsContainer,
    FeatherIconsContainer,
    HelpersContainer,
    ImageCropperContainer,
    IntroductionContainer,
    PaginatorContainer,
    PanelsContainer,
    ProgressBarContainer,
    ResponsiveLayoutsContainer,
    SelectsContainer,
    SnackBarsContainer,
    SpinnersContainer,
    StepperContainer,
    TablesContainer,
    TextInputsContainer,
    TypingsContainer,
    UserIconsContainer,
} from './containers';

import navigationSchema from './navigation';
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
            <Navigation schema={navigationSchema} simple={simple} onChange={this.handleViewChange} />
            <ResponsiveContainer classes={responsiveContainerClasses}>
                <Switch>
                    <Route exact path="/" component={IntroductionContainer} />
                    <Route exact path="/typings" component={TypingsContainer} />
                    <Route exact path="/responsive" component={ResponsiveLayoutsContainer} />
                    <Route exact path="/colors" component={ColorsContainer} />
                    <Route exact path="/icons" component={FeatherIconsContainer} />
                    <Route exact path="/panels" component={PanelsContainer} />
                    <Route exact path="/tabs" component={TablesContainer} />
                    <Route exact path="/buttons" component={ButtonsContainer} />
                    <Route exact path="/checkboxes" component={CheckboxesContainer} />
                    <Route exact path="/inputs" component={TextInputsContainer} />
                    <Route exact path="/selects" component={SelectsContainer} />
                    <Route exact path="/badges" component={BadgesContainer} />
                    <Route exact path="/user-icons" component={UserIconsContainer} />
                    <Route exact path="/progress" component={ProgressBarContainer} />
                    <Route exact path="/spinners" component={SpinnersContainer} />
                    <Route exact path="/tables" component={TablesContainer} />
                    <Route exact path="/charts" component={ChartsContainer} />
                    <Route exact path="/cropper" component={ImageCropperContainer} />
                    <Route exact path="/paginator" component={PaginatorContainer} />
                    <Route exact path="/stepper" component={StepperContainer} />
                    <Route exact path="/snack" component={SnackBarsContainer} />
                    <Route exact path="/helpers" component={HelpersContainer} />

                    <Redirect to="/" />
                </Switch>
            </ResponsiveContainer>
        </FlexContainer>;
    }
}
