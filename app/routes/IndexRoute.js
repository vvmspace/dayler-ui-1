import React from 'react'
import { ResponsiveFlexContainer } from 'dayler-ui'

import classes from './classes.styl'

export const IndexRoute = () => {
    const css = {
        container: {
            container: classes.container,
        },
    }

    return <ResponsiveFlexContainer overrides={css.container}>
        ...
    </ResponsiveFlexContainer>
}
