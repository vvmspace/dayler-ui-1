import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';

import { value as key } from '../../services/random';

import { Panel } from '../Panel';
import { Tab } from '../Tab';

import style from './style.styl';

@withRouter
export class TabsRouter extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.arrayOf(PropTypes.element),
        ]),
        classes: PropTypes.shape({
            container: PropTypes.string,
            header: PropTypes.string,
            body: PropTypes.string,
            tab: PropTypes.string,
        })
    };

    static defaultProps = {
        classes: {
            container: '',
            header: '',
            body: '',
            tab: '',
        },
    };

    state = {
        left: 0,
        width: 0,
    };

    getBorderStyle = ({ match, location, children }) => {
        const elementIndex = children.findIndex(node => match.path + node.props?.path === location.pathname);
        const elements = this.header?.children;

        const width = elements[elementIndex]?.offsetWidth;
        const left = Array.from({ length: elementIndex })
            .reduce((result, element, index) => result += elements[index]?.offsetWidth, 20);

        return { left, width };
    };

    getChilrenArray = data => {
        const result = Array.isArray(data)
            ? data
            : [data];

        for (let node of result) {
            if (node.type.displayName !== 'Tab') {
                throw new Error('Childs validation error. It must be <Tab /> element.');
            }
        }

        return result;
    };

    isActive = match => {
        return match?.isExact;
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState(this.getBorderStyle(this.props));
        }
    }

    componentDidMount() {
        document.fonts.ready.then(() => this.setState(this.getBorderStyle(this.props)));
    }

    render() {
        const { children, classes, match, location, history, staticContext, ...props } = this.props;
        const { left, width } = this.state;

        const nodes = this.getChilrenArray(children);
        const containerClassNames = classNames(style.container, classes.container);
        const headerClassNames = classNames(style.header, classes.header);
        const bodyClassNames = classNames(style.body, classes.body);
        const tabClassNames = classNames(style.tab, classes.tab);

        return <div {...props} className={containerClassNames}>
            <div className={headerClassNames} ref={referance => this.header = referance}>
                {nodes.map(node => (
                    <NavLink key={key(32)}
                        to={match.path + node.props.path}
                        className={tabClassNames}
                        activeClassName={style.active}
                        isActive={this.isActive}>
                        {node.props.title}
                    </NavLink>
                ))}
                <span className={style.border} style={{ left, width }}></span>
            </div>
            <Panel classes={{ body: bodyClassNames }}>
                {nodes.map(node => (
                    <Route exact key={key(32)} path={`${match.path}${node.props.path}`} render={() => node} />
                ))}
            </Panel>
        </div>;
    }
}
