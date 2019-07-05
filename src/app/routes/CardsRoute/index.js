import React, { PureComponent } from 'react'

import { Card } from 'dayler-ui'

import css from './css.styl'

export default class CardsRoute extends PureComponent {
    render() {
        return <div className={css.container}>
            <Card title="Default Card">
                card content
            </Card>
        </div>
    }
}
