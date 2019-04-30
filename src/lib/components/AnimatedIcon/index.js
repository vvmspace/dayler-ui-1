import React from 'react'
import PropTypes from 'prop-types'

import schema from './icons.json'

import { Menu } from './Menu'

export const AnimatedIcon = ({ name, ...props }) => {
    switch (name) {
        case 'menu':
            return <Menu {...props} />

        default:
            return <Menu {...props} />
    }
}

AnimatedIcon.propTypes = {
    name: PropTypes.oneOf(schema),
}
