import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { intRange } from '../../services';

import style from './style.styl';

export function getView(params) {
    const grid = {
        retina: 1,
        desktop: 1,
        tablet: 1,
        ...params,
    };

    Object.values(grid)
        .forEach(param => {
            if (param < 1 || param > 12) {
                throw new Error('grid params must be between 1 and 12');
            }
        });

    return `retina${grid.retina}Desktop${grid.desktop}Tablet${grid.tablet}`;
}


export function GridContainer({ classes, children, grid, ...props }) {
    const containerClassNames = classnames(style.container, style[getView(grid)], classes.container);

    return <div {...props} className={containerClassNames}>
        {children}
    </div>;
}

const values = intRange(1, 12);

GridContainer.propTypes = {
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
    grid: PropTypes.shape({
        tablet: PropTypes.oneOf(values),
        desktop: PropTypes.oneOf(values),
        retina: PropTypes.oneOf(values),
    }),
};

GridContainer.defaultProps = {
    classes: {
        container: '',
    },
    grid: {
        tablet: 1,
        desktop: 1,
        retina: 1,
    },
};
