import React, { PureComponent } from 'react'

import { Card } from 'dayler-ui'

import __CSS__ from './css.styl'

export default class CardsRoute extends PureComponent {
    render() {
        return <div className={__CSS__.container}>
            <Card title="Default Card">
                card content
            </Card>
        </div>
    }
}
