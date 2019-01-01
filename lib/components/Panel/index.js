import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.styl';

export class Panel extends Component {
    static propTypes = {
        classes: PropTypes.shape({
            body: PropTypes.string,
            container: PropTypes.string,
            header: PropTypes.string,
        }),
        title: PropTypes.string,
    };

    static defaultProps = {
        classes: {
            body: '',
            container: '',
            header: '',
        },
    };

    render() {
        const { children, classes, title, ...props } = this.props;

        const bodyClassNames = classNames(style.body, classes.body);
        const containerClassNames = classNames(style.container, classes.container);
        const headerClassNames = classNames(style.header, classes.header);

        return <div {...props} className={containerClassNames}>
            {title && <div className={headerClassNames}>{title}</div>}
            <div className={bodyClassNames}>
                {children}
            </div>
        </div>;
    }
}
