import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, withRouter } from 'react-router-dom';

import styles from './style.styl';

@withRouter
export default class Tabs extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        routes: PropTypes.arrayOf(
            PropTypes.shape({
                component: PropTypes.func.isRequired,
                exact: PropTypes.bool,
                path: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
            }),
        ).isRequired,
    };

    state = {
        left: 20,
        width: 80,
    };

    compoundBorderStyle = ({ match, location, routes }) => {
        const elementIndex = routes.findIndex(route => `${match.path}${route.path}` === location.pathname);
        const elements = this.header?.children;

        const width = elements[elementIndex]?.offsetWidth;
        const left = Array.from({ length: elementIndex })
            .reduce((result, element, index) => result += elements[index]?.offsetWidth, 20);

        return { left, width };
    };

    isActive = (match, location) => {
        return match?.path === location.pathname;
    };

    componentDidMount() {
        document.fonts.ready
            .then(() => {
                this.props |> this.compoundBorderStyle |> this.setState;
            });
    }

    componentDidUpdate(props) {
        if (props.location?.pathname !== this.props.location?.pathname) {
            this.props |> this.compoundBorderStyle |> this.setState;
        }
    }

    render() {
        const { match, routes } = this.props;

        return <div className={styles.container}>
            <div className={styles.header} ref={_ => this.header = _}>
                {routes.map(link => (
                    <NavLink key={link.path}
                        activeClassName={styles.active}
                        className={styles.link}
                        isActive={this.isActive}
                        to={`${match.path}${link.path}`}>{link.title}</NavLink>
                ))}
                <div className={styles.border} style={this.state}></div>
            </div>
            <div className={styles.body}>
                {routes.map(route => (
                    <Route key={route.path}
                        exact={route.exact}
                        path={`${match.path}${route.path}`}
                        component={route.component} />
                ))}
            </div>
        </div>;
    }
}
