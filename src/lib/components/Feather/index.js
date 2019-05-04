import React, { memo, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { icons } from 'feather-icons'

import classes from './classes.styl'

const index = (round = 100000) => (Math.random() * round).toFixed(2)

export const featherIconsSource = {
    list: Object.keys(icons),
    icons: Object.keys(icons)
        .map(key => ({
            id: index(),
            name: key,
            tags: icons[key].tags,
        })),
}

export const Feather = memo(({ children, overrides, size, ...props }) => {
    const svg = useRef(null)

    const css = {
        container: classnames(classes.container, overrides.container),
    }

    const { contents, attrs } = icons[children]

    useEffect(() => {
        svg.current.innerHTML = contents
    })

    return <svg {...props} className={css.container}
        xmlns={attrs.xmlns}
        width={size}
        height={size}
        viewBox={attrs.viewBox}
        fill={attrs.fill}
        stroke={attrs.stroke}
        strokeWidth={attrs['stroke-width']}
        strokeLinecap={attrs['stroke-linecap']}
        strokeLinejoin={attrs['stroke-linejoin']}
        ref={svg} >
    </svg>
})

Feather.propTypes = {
    overrides: PropTypes.shape({
        container: PropTypes.string,
    }),
    children: PropTypes.oneOf(featherIconsSource.list).isRequired,
    size: PropTypes.number.isRequired,
}

Feather.defaultProps = {
    overrides: {
        container: '',
    },
    children: 'x',
    size: 24,
}
