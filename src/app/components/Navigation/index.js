import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { NavigationList } from 'app/components'
import schema from 'app/schema'

import * as service from './service'
import classes from './classes.styl'

export const Navigation = ({ filter, open, ...props }) => {
    const css = {
        container: classnames(classes.container, {
            [classes.open]: open,
        }),
    }

    const groups = service.search(schema, filter)

    return <div {...props} className={css.container}>
        <div className={classes.content}>
            <NavigationList data={groups} />
        </div>
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
