import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import __CSS__ from './css.styl'

export const Spinner = ({ classes, opacity, size, speed, ...props }) => {
    const css = {
        container: classnames(__CSS__.container, classes.container),
    }

    return <svg xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 40 40"
        width={size}
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        {...props}
        className={css.container}>
        <g fill="none">
            <g transform="translate(1 1)">
                <circle strokeOpacity={opacity} cx="19" cy="19" r="17"/>
                <path d="M36 19c0-9.94-8.06-17-17-17">
                    <animateTransform attributeName="transform"
                        type="rotate"
                        from="0 19 19"
                        to="360 19 19"
                        dur={`${speed}s`}
                        repeatCount="indefinite" />
                </path>
            </g>
        </g>
    </svg>
}

Spinner.propTypes = {
    classes: PropTypes.shape({
        container: PropTypes.string,
    }),
    opacity: PropTypes.number,
    size: PropTypes.number,
    speed: PropTypes.number,
}

Spinner.defaultProps = {
    classes: {
        container: '',
    },
    opacity: .2,
    size: 24,
    speed: 1,
}
