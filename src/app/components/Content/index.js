import React from 'react'

import css from './css.styl'

export const Content = ({ children, ...props }) => {
    return <div {...props} className={css.container}>
        <div className={css.content}>
            {children}
        </div>
    </div>
}
