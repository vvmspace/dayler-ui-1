import React from 'react';
import PropTypes from 'prop-types';
import * as feather from 'react-feather';

import icons from './icons.json';

export const getIcon = name =>
    name.split('-').reduce((result, str) =>
        result + str.charAt(0).toUpperCase() + str.slice(1), '');

export function Icon({ name, ...props }) {
    const Vector = feather[getIcon(name)] || feather.X;

    return <Vector {...props} />;
}

Icon.propTypes = {
    name: PropTypes.oneOf(icons).isRequired,
};
