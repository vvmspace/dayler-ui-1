import React from 'react'

import { NavigationItem } from 'app/components'
import { SchemaType } from 'app/schema'

import classes from './classes.styl'

export const NavigationNull = () => {
    return <div className={classes.null}>No Match</div>
}

export const NavigationList = ({ data }) => {
    return data.length
        ? <div className={classes.container}>
            {data.map(group => <div key={group.key} className={classes.group}>
                {group.items?.map(item => <NavigationItem item={item} key={item.key} />)}
            </div>)}
        </div>
        : <NavigationNull />
}

NavigationList.propTypes = {
    data: SchemaType.isRequired,
}
