import React from 'react'

import classes from './classes.styl'

export const Header = ({ ...props }) => {
    return <div {...props} className={classes.container}>
        ... header ...
    </div>
}
