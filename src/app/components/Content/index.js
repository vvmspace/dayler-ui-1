import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import __CSS__ from './css.styl'

export const Content = ({ children, isWidth, ...props }) => {
    const css = {
        container: classnames(__CSS__.container, {
            [__CSS__.xl]: isWidth,
            [__CSS__.xs]: !isWidth,
        }),
    }

    return <div {...props} className={css.container}>
        {children}
    </div>
}

Content.propTypes = {
    isWidth: PropTypes.bool,
}
