import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.styl';

export function _({ classes, ...props }) {
    const containerClassNames = classnames(style.container, classes.container);

    return <div {...props} className={containerClassNames}>...</div>;
}

_.propTypes = {
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
};

_.defaultProps = {
    classes: {
        container: '',
    },
};
