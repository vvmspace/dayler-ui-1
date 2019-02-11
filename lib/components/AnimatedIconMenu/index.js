import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.styl';

export function AnimatedIconMenu({ active, classes, ...props }) {
    const containerClassNames = classnames(style.container, classes.container, {
        [style.active]: active,
    });

    return <div {...props} className={containerClassNames}>
        {Array.from({ length: 6 }).map((_, index) => <i key={index}></i>)}
    </div>;
}

AnimatedIconMenu.propTypes = {
    active: PropTypes.bool.isRequired,
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
};

AnimatedIconMenu.defaultProps = {
    active: false,
    classes: {
        container: '',
    },
};
