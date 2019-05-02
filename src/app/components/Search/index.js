import React, { forwardRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './classes.styl'

export const Search = forwardRef(function SearchComponent({ active, onChange, overrides, value, ...props }, refLink) {
    const css = {
        container: classnames(classes.container, overrides.container, {
            [classes.active]: active,
        }),
    }

    const handleChange = useCallback(({ target: { value }}) => {
        onChange(value)
    }, [''])

    return <input {...props}
        className={css.container}
        type="text"
        placeholder="Search ..."
        value={value}
        onChange={handleChange}
        ref={refLink} />
})

Search.propTypes = {
    active: PropTypes.bool,
    onChange: PropTypes.func,
    overrides: PropTypes.shape({
        container: PropTypes.string,
    }),
    value: PropTypes.string,
}

Search.defaultProps = {
    active: false,
    onChange: () => { },
    overrides: {
        container: '',
    },
    value: '',
}
