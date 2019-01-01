import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.styl';

export class FlexContainer extends PureComponent {
    static propTypes = {
        classes: PropTypes.shape({
            container: PropTypes.string,
        }),
        vertical: PropTypes.bool,
    };

    static defaultProps = {
        classes: {
            container: '',
        },
        vertical: false,
    };

    render() {
        const { children, classes, vertical, ...props } = this.props;

        const containerClasses = classNames(
            style.container,
            classes.container,
            {
                [style.vertical]: vertical,
            },
        );

        return <div {...props} className={containerClasses}>
            {children}
        </div>;
    }
}
