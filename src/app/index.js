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
    DateContainer,
    FeatherIconsContainer,
    HelpersContainer,
    ImageCropperContainer,
    IntroductionContainer,
    PaginatorContainer,
    PanelsContainer,
    ProgressBarContainer,
    ResponsiveLayoutsContainer,
    ScrollViewContainer,
    SelectsContainer,
    SnackBarsContainer,
    SpinnersContainer,
    StepperContainer,
    SyntaxContainer,
    TablesContainer,
    TabsContainer,
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

                    <Route path="/badges" component={BadgesContainer} />
                    <Route path="/buttons" component={ButtonsContainer} />
                    <Route path="/charts" component={ChartsContainer} />
                    <Route path="/checkboxes" component={CheckboxesContainer} />
                    <Route path="/colors" component={ColorsContainer} />
                    <Route path="/cropper" component={ImageCropperContainer} />
                    <Route path="/date" component={DateContainer} />
                    <Route path="/helpers" component={HelpersContainer} />
                    <Route path="/icons" component={FeatherIconsContainer} />
                    <Route path="/inputs" component={TextInputsContainer} />
                    <Route path="/paginator" component={PaginatorContainer} />
                    <Route path="/panels" component={PanelsContainer} />
                    <Route path="/progress" component={ProgressBarContainer} />
                    <Route path="/responsive" component={ResponsiveLayoutsContainer} />
                    <Route path="/scroll" component={ScrollViewContainer} />
                    <Route path="/selects" component={SelectsContainer} />
                    <Route path="/snack" component={SnackBarsContainer} />
                    <Route path="/spinners" component={SpinnersContainer} />
                    <Route path="/stepper" component={StepperContainer} />
                    <Route path="/syntax" component={SyntaxContainer} />
                    <Route path="/tables" component={TablesContainer} />
                    <Route path="/tables" component={TablesContainer} />
                    <Route path="/tabs" component={TabsContainer} />
                    <Route path="/typings" component={TypingsContainer} />
                    <Route path="/user-icons" component={UserIconsContainer} />

                    <Redirect to="/" />
                </Switch>
            </ResponsiveContainer>
        </FlexContainer>;
    }
}
