import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.styl';

export class Text extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    render() {
        const { className, children, ...props } = this.props;

        const containerClassNames = classNames(
            style.container,
            className,
        );

        return <p {...props} className={containerClassNames}>
            {children}
        </p>;
    }
}
