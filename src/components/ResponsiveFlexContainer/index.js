import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './classes.styl'

export const ResponsiveFlexContainer = ({ children, overrides, ...props }) => {
    const css = {
        container: classnames(classes.container, overrides.container),
    }

    return <div {...props} className={css.container}>
        {children}
    </div>
}

ResponsiveFlexContainer.propTypes = {
    overrides: PropTypes.shape({
        container: PropTypes.string,
    }),
}

ResponsiveFlexContainer.defaultProps = {
    overrides: {
        container: '',
    },
}
