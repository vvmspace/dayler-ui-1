import React from 'react'

import classes from './classes.styl'

export const Content = ({ children, ...props }) => {
    return <div {...props} className={classes.container}>
        {children}
    </div>
}