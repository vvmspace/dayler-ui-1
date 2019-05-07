import React from 'react'
import PropTypes from 'prop-types'

import classes from './classes.styl'

export const Panel = ({ children, title, ...props }) => {
    return <div {...props} className={classes.container}>
        {title && <div className={classes.header}>
            <span className={classes.title}>
                {title}
            </span>
        </div>}
        <div className={classes.body}>
            {children}
        </div>
    </div>
}

Panel.propTypes = {
    title: PropTypes.string,
}
