import React from 'react'
import { Button } from 'dayler-ui'

import classes from './classes.styl'

export const Header = ({ ...props }) => (
    <div {...props} className={classes.header}>
        <Button />
    </div>
)
