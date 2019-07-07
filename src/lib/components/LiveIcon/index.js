import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import __CSS__ from './css.styl'
import __ICONS__ from './icons.json'

export const LiveIcon = ({ active, children, classes, ...props }) => {
    const name = children?.toString()
        ?.replace(/-/g, '')

    const css = {
        container: classnames(__CSS__.container, __CSS__[name], classes.container, {
            [__CSS__.active]: active,
        }),
    }

    return <div {...props} className={css.container}>
        <i></i>
        <i></i>
        <i></i>
    </div>
}

LiveIcon.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.oneOf(__ICONS__).isRequired,
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
}

LiveIcon.defaultProps = {
    active:false,
    classes: {
        container: '',
    },
}
