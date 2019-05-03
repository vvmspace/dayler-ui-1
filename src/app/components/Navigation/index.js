import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import classes from './classes.styl'
import items from './items.json'

export const getItems = filter => {
    return items.map(group => {

        return group.items
            .filter(item => {
                return item.title.toLowerCase().search(filter.toLowerCase() > -1)
            })
            .map(item => {
                return <span key={item.key}>{item.title}</span>
            })
    })
}

export const Navigation = ({ filter, open, ...props }) => {
    const css = {
        container: classnames(classes.container, {
            [classes.open]: open,
        }),
    }

    return <div {...props} className={css.container}>
        <div className={classes.content}>{getItems(filter)}</div>
    </div>
}

Navigation.propTypes = {
    filter: PropTypes.string,
    open: PropTypes.bool,
}

Navigation.defaultProps = {
    filter: '',
    open: false,
}
