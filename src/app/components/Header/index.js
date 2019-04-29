import React from 'react'

import classes from './classes.styl'

export const Header = ({ ...props }) => {
    return <div {...props} className={classes.container}>
        <div className={classes.content}>
            <img className={classes.logo} src="https://cdn.dayler.io/images/logo_dark.svg" alt="Dayler.io" />
        </div>
    </div>
}
