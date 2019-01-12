import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { value as key } from '../../services/random';

import { Panel } from '../Panel';

import style from './style.styl';

export class Tabs extends Component {
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
        }),
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
        active: null,
        left: 0,
        width: 0,
    };

    getBorderStyle = nodes => {
        const { active } = this.state;

        const elementIndex = nodes.findIndex(node => node.props?.path === active);
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

    isActive = node => {
        const { active } = this.state;

        return active === node.props?.path;
    };

    handleClick = node => () => {
        this.setState({ active: node?.props?.path });
    };

    componentDidUpdate(_, prevState) {
        const { children } = this.props;
        const { active } = this.state;

        const nodes = this.getChilrenArray(children);

        if (prevState.active !== active) {
            this.setState(this.getBorderStyle(nodes));
        }
    }

    componentDidMount() {
        const { children } = this.props;
        const nodes = this.getChilrenArray(children);

        document.fonts.ready.then(() => this.setState({
            ...this.getBorderStyle(nodes),
            active: nodes[0]?.props?.path,
        }));
    }

    render() {
        const { children, classes, ...props } = this.props;
        const { left, width } = this.state;

        const nodes = this.getChilrenArray(children);
        const containerClassNames = classNames(style.container, classes.container);
        const headerClassNames = classNames(style.header, classes.header);

        return <div {...props} className={containerClassNames}>
            <div className={headerClassNames} ref={referance => this.header = referance}>
                {nodes.map(node => {
                    const tabClassNames = classNames(style.tab, classes.tab, { [style.active]: this.isActive(node) });

                    return <span key={key(32)}
                        onClick={this.handleClick(node)}
                        className={tabClassNames}>
                        {node.props.title}
                    </span>;
                })}
                <span className={style.border} style={{ left, width }}></span>
            </div>
            {nodes.map(node => {
                const bodyClassNames = classNames(style.body, classes.body, { [style.visible]: this.isActive(node)});

                return <Panel key={key(32)} classes={{ body: bodyClassNames }}>{node}</Panel>;
            })}
        </div>;
    }
}
