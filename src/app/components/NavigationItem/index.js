import React from 'react'
import { NavLink } from 'react-router-dom'

import { ItemType } from 'app/schema'

import * as service from './service'
import classes from './classes.styl'

export const NavigationItem = ({ item }) => {
    return <NavLink className={classes.container}
        activeClassName={classes.active}
        isActive={service.isActive}
        to={item.href}>
        {item.title}
    </NavLink>
}

NavigationItem.propTypes = {
    item: ItemType.isRequired,
}
