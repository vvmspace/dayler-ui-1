import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './classes.styl'

export const _ = ({ overrides, ...props }) => {
    const css = {
        container: classnames(classes.container, overrides.container),
    }

    return <div {...props} className={css.container}>...</div>
}

_.propTypes = {
    overrides: PropTypes.shape({
        container: PropTypes.string,
    }),
}

_.defaultProps = {
    overrides: {
        container: '',
    },
}
