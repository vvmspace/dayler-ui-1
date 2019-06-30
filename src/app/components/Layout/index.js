import React from 'react'

import css from './css.styl'

export const Layout = ({ children, ...props }) => {
    return <div {...props} className={css.container}>
        {children}
    </div>
}
