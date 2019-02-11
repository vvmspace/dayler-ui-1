import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.styl';

export function FlexLayout({ children, classes, horizontal, ...props }) {
    const containerClassNames = classnames(style.container, classes.container, {
        [style.horizontal]: horizontal,
    });

    return <div {...props} className={containerClassNames}>
        {children}
    </div>;
}

FlexLayout.propTypes = {
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
    horizontal: PropTypes.bool,
};

FlexLayout.defaultProps = {
    classes: {
        container: '',
    },
    horizontal: false,
};
