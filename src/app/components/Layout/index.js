import React from 'react'

import classes from './classes.styl'

export const Layout = ({ children, ...props }) => {
    return <div {...props} className={classes.container}>
        {children}
    </div>
}
