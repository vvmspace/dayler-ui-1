import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './classes.styl'

export const Layout = ({ children, overrides, ...props }) => {
    const css = {
        container: classnames(classes.container, overrides.container),
    }

    return <div {...props} className={css.container}>
        {children}
    </div>
}

Layout.propTypes = {
    overrides: PropTypes.shape({
        container: PropTypes.string,
    }),
}

Layout.defaultProps = {
    overrides: {
        container: '',
    },
}
