import React from 'react'

import classes from './classes.styl'

export const Icon = ({ children, ...props }) => {
    return <div {...props} className={classes.container}>
        {children}
    </div>
}
