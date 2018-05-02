import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';

import styles from './styles.styl';

export default class TabsRouter extends Component {
    static propTypes = {
        innerStyle: PropTypes.object,
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        routes: PropTypes.array.isRequired,
    };

    static defaultProps = {
        routes: [],
    };

    state = {
        left: 20,
        width: 80,
    }

    isActive = (match, location) => {
        return match && match.path === location.pathname;
    };

    getBorderStyle = ({ match, location, routes }) => {
        const elementIndex = routes.findIndex(route => `${match.path}${route.path}` === location.pathname);
        const elements = this.header.children;

        const width = elements[elementIndex].offsetWidth;
        const left = Array.from({ length: elementIndex })
            .reduce((result, element, index) => result += elements[index].offsetWidth, 20);

        return { left, width };
    };

    componentWillReceiveProps(nextProps) {
        this.setState(this.getBorderStyle(nextProps));
    }

    componentDidMount() {
        document.fonts.ready.then(() => this.setState(this.getBorderStyle(this.props, true)));
    }


    render() {
        const { innerStyle, match, routes } = this.props;
        const { left, width } = this.state;

        return (
            <div className={styles.router}>
                <div className={styles.header} ref={referance => this.header = referance}>
                    {routes.map(link => (
                        <NavLink key={link.path}
                            to={`${match.path}${link.path}`}
                            className={styles.link}
                            activeClassName={styles.active}
                            isActive={this.isActive}>{link.title}</NavLink>
                    ))}
                    <div className={styles.border} style={{ left, width }}></div>
                </div>
                <div style={{ innerStyle }} className={styles.body}>
                    {routes.map(route => (
                        <Route key={route.path}
                            exact={route.exact}
                            path={`${match.path}${route.path}`}
                            component={route.component}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
