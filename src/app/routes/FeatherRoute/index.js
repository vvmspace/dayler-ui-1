import React, { PureComponent } from 'react'

import { Feather, featherIconsSource } from 'dayler-ui'

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
        const icons = service.search(featherIconsSource.icons, query)

        return <div className={classes.container}>
            <input type="text" className={classes.search}
                placeholder="Search ..."
                value={query}
                onChange={this.handleSearch} />

            <div className={classes.icons}>
                {icons.map(icon => <span key={icon.id} className={classes.icon}>
                    <Feather size={48}>{icon.name}</Feather>
                    <span className={classes.title}>{icon.name}</span>
                </span>)}
            </div>
        </div>
    }
}
