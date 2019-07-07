import React from 'react'

import __CSS__ from './css.styl'

export const Layout = ({ children, ...props }) => {
    return <div {...props} className={__CSS__.container}>
        {children}
    </div>
}
