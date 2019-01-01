import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.styl';

export class ResponsiveContainer extends PureComponent {
    static propTypes = {
        classes: PropTypes.shape({
            container: PropTypes.string,
        }),
    };

    static defaultProps = {
        classes: {
            container: '',
        },
    };

    render() {
        const { children, classes, ...props } = this.props;

        const containerClassNames = classNames(style.container, classes.container);

        return <div {...props} className={containerClassNames}>
            {children}
        </div>;
    }
}
