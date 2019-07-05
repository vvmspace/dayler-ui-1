import React, { PureComponent } from 'react'

import { Button, Card } from 'dayler-ui'

import __CSS__ from './css.styl'

export default class ButtonsRoute extends PureComponent {
    render() {
        return <div className={__CSS__.container}>
            <Card title="Buttons" classes={{ container: __CSS__.card, content: __CSS__.content }}>
                <Button color="blue">Button</Button>
                <Button color="green">Button</Button>
                <Button color="grey">Button</Button>
                <Button color="red">Button</Button>
            </Card>

            <Card title="Disabled Buttons" classes={{ container: __CSS__.card, content: __CSS__.content }}>
                <Button color="blue" disabled>Button</Button>
                <Button color="green" disabled>Button</Button>
                <Button color="grey" disabled>Button</Button>
                <Button color="red" disabled>Button</Button>
            </Card>

            <Card title="Icon Buttons" classes={{ container: __CSS__.card, content: __CSS__.content }}>
                <Button color="blue" icon="box">Button</Button>
                <Button color="green" icon="feather">Button</Button>
                <Button color="grey" icon="arrow-left">Button</Button>
                <Button color="red" icon="chevrons-down">Button</Button>
            </Card>

            <Card title="Icon Buttons" classes={{ container: __CSS__.card, content: __CSS__.content }}>
                <Button color="blue" icon="box" />
                <Button color="green" icon="feather" />
                <Button color="grey" icon="arrow-left" />
                <Button color="red" icon="chevrons-down" />
            </Card>

            <Card title="Disabled Icon Buttons" classes={{ container: __CSS__.card, content: __CSS__.content }}>
                <Button color="blue" disabled icon="box">Button</Button>
                <Button color="green" disabled icon="feather">Button</Button>
                <Button color="grey" disabled icon="arrow-left">Button</Button>
                <Button color="red" disabled icon="chevrons-down">Button</Button>
            </Card>

            <Card title="Loading Buttons" classes={{ container: __CSS__.card, content: __CSS__.content }}>
                <Button color="blue" loading icon="box">Button</Button>
                <Button color="green" loading icon="feather">Button</Button>
                <Button color="grey" loading icon="arrow-left">Button</Button>
                <Button color="red" loading icon="chevrons-down">Button</Button>
            </Card>

            <Card title="Loading Buttons" classes={{ container: __CSS__.card, content: __CSS__.content }}>
                <Button color="blue" loading icon="x" />
                <Button color="green" loading icon="x" />
                <Button color="grey" loading icon="x" />
                <Button color="red" loading icon="x" />
            </Card>
        </div>
    }
}
