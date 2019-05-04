import React from 'react'
import PropTypes from 'prop-types'

import classes from './classes.styl'

export const Icon = ({ children, index, ...props }) => {
    return <div {...props} className={classes.container} style={{ animationDelay: `${Math.log(index) * 0.1}s` }}>
        {children}
    </div>
}

Icon.propTypes = {
    index: PropTypes.number,
}

Icon.defaultProps = {
    index: 1,
}
