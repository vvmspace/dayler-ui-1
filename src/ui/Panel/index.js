import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import './style.styl'

export default class Panel extends Component {
    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.string,
    }

    render() {
        const { children, title, icon, ...props } = this.props

        const headerIcon = icon
            ? <div className="panel__header--icon">
                <Icon size={16} name={icon} />
            </div>
            : null;

        const header = title
            ? <div className="panel__header">
                {headerIcon}
                <div className="panel__header--title">{title}</div>
            </div>
            : null;

        return (
            <div className="panel">
                {header}
                <div className="panel__body" {...props}>
                    {children}
                </div>
            </div>
        )
    }
}
