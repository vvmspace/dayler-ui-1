import React from 'react';
import PropTypes from 'prop-types';

import icons from './icons.json';

import Menu from './menu';

export function AnimatedIcon({ name, ...props }) {
    switch(name) {
        case 'menu':
            return <Menu {...props} />;

        default:
            return <Menu {...props} />;
    }
}

AnimatedIcon.propTypes = {
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
    name: PropTypes.oneOf(icons).isRequired,
};

AnimatedIcon.defaultProps = {
    classes: {
        container: '',
    },
    name: 'menu',
};
