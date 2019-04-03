import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { intRange } from '../../utils'

import classes from './classes.styl'

export function getView(params) {
    const grid = {
        retina: 1,
        desktop: 1,
        tablet: 1,
        ...params,
    }

    Object.values(grid)
        .forEach(param => {
            if (param < 1 || param > 12) {
                throw new Error('grid params must be between 1 and 12')
            }
        })

    return `gw${grid.retina}_${grid.desktop}_${grid.tablet}`
}

export const ResponsiveGridcontainer = ({ children, grid, overrides, ...props }) => {
    const css = {
        container: classnames(classes.container, classes[getView(grid)], overrides.container),
    }

    return <div {...props} className={css.container}>
        {children}
    </div>
}

const values = intRange(1, 12)

ResponsiveGridcontainer.propTypes = {
    grid: PropTypes.shape({
        tablet: PropTypes.oneOf(values),
        desktop: PropTypes.oneOf(values),
        retina: PropTypes.oneOf(values),
    }),
    overrides: PropTypes.shape({
        container: PropTypes.string,
    }),
}

ResponsiveGridcontainer.defaultProps = {
    grid: {
        tablet: 1,
        desktop: 1,
        retina: 1,
    },
    overrides: {
        container: '',
    },
}
