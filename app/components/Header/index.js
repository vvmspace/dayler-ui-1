import React, { useState, useCallback } from 'react'

import { AnimatedIcon, ResponsiveFlexContainer } from 'dayler-ui'

import classes from './classes.styl'

export const Header = ({ ...props }) => {
    const [isOpen, setIsOpen] = useState(false)

    return <div {...props} className={classes.container}>
        <ResponsiveFlexContainer>
            <AnimatedIcon name="menu"
                onClick={() => setIsOpen(true)}
                state={isOpen}
                overrides={{ container: classes.icon }} />

        </ResponsiveFlexContainer>
    </div>
}
