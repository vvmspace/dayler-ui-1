import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.styl';

export default function Menu({ classes, state, ...props }) {
    const containerClassNames = classnames(style.container, classes.container, {
        [style.active]: state,
    });

    return <div {...props} className={containerClassNames}>
        <i></i>
        <i></i>
        <i></i>
    </div>;
}

Menu.propTypes = {
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
    state: PropTypes.bool.isRequired,
};

Menu.defaultProps = {
    classes: {
        container: '',
    },
    state: false,
};
