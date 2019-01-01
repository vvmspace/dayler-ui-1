import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './style.styl';

export class Heading extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        h1: PropTypes.bool,
        h2: PropTypes.bool,
        h3: PropTypes.bool,
        h4: PropTypes.bool,
        h5: PropTypes.bool,
        h6: PropTypes.bool,
    };

    static defaulProps = {
        className: '',
    };

    render() {
        const { children, className, h1, h2, h3, h4, h5, h6, ...props } = this.props;

        const containerClassNames = classNames(
            style.container,
            {
                [style.h1]: h1,
                [style.h2]: h2,
                [style.h3]: h3,
                [style.h4]: h4,
                [style.h5]: h5,
                [style.h6]: h6,
            },
            className,
        );

        return <span {...props} className={containerClassNames}>
            {children}
        </span>;
    }
}
