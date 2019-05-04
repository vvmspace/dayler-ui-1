import React, { PureComponent } from 'react'

import { Feather, featherIconsSource } from 'dayler-ui'

export default class FeatherRoute extends PureComponent {
    render() {
        return <div>
            {featherIconsSource.icons.map(icon => <Feather key={icon.id}>{icon.name}</Feather>)}
        </div>
    }
}
