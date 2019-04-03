import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './classes.styl'

export const Menu = ({ overrides, state, ...props }) => {
    const css = {
        container: classnames(classes.container, overrides.container, {
            [classes.active]: state,
        }),
    }

    return <div {...props} className={css.container}>
        <i></i>
        <i></i>
        <i></i>
    </div>
}

Menu.propTypes = {
    overrides: PropTypes.shape({
        container: PropTypes.string,
    }),
    state: PropTypes.bool,
}

Menu.defaultProps = {
    overrides: {
        container: '',
    },
    state: false,
}
