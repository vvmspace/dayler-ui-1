import React, { PureComponent } from 'react'

import { Feather, featherIconsSource } from 'dayler-ui'
import { Icon } from 'app/components'

import * as service from './service'
import classes from './classes.styl'

export default class FeatherRoute extends PureComponent {
    state = {
        query: '',
    }

    handleSearch = ({ target: { value }}) => {
        this.setState({
            query: value,
        })
    }

    render() {
        const { query } = this.state

        return <div className={classes.container}>
            <input type="text" className={classes.search}
                placeholder="Search ..."
                value={query}
                onChange={this.handleSearch} />

            <div className={classes.icons}>
                {service.search(featherIconsSource.icons, query).map(icon => <Icon key={icon.id}>
                    <Feather size={48}>{icon.name}</Feather>
                    <span className={classes.title}>{icon.name}</span>
                </Icon>)}
            </div>
        </div>
    }
}
