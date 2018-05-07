![logo](https://cdn.dayler.io/images/logo_dark.svg)
---
[![npm version](https://badge.fury.io/js/dayler-ui.svg)](https://badge.fury.io/js/dayler-ui)

Dayler React Components

### Api with examples
[https://ui.dayler.io](https://ui.dayler.io)

### Installation
```bash
npm install --save dayler-ui
```

### Usage
You can easily add base styles for you app from `.stylus`
```stylus
@import '~dayler-ui/src/ui/stylus/base.styl'
```

#### Colors
```stylus
@import '~dayler-ui/src/ui/stylus/base.styl'

$DARK = #585C67
$DEFAULT = #EEEEEE
$GRAY = #777F83
$GREEN = #66C85F
$RED = #E14839
$YELLOW = #F0B458
```

#### Panels
```js
import { Panel } from 'dayler-ui';

<Panel>
    ...
</Panel>
```

```js
import { Panel } from 'dayler-ui';

<Panel title="panel with title">
    ...
</Panel>
```

```js
import { Panel } from 'dayler-ui';

<Panel title="panel with title and icon" icon="code">
    ...
</Panel>
```

#### Icons
Icons provided by [Feathericons](https://feathericons.com)

```js
import { Icon } from 'dayler-ui';

<Icon name="activity" />
```

#### Buttons
```js
import { Button } from 'dayler-ui';

<Button title="Next" />
<Button title="Next" color="dark" />
<Button title="Next" color="red" />
<Button title="Next" color="green" />
<Button title="Next" color="yellow" />
```

```js
import { IconButton } from 'dayler-ui';

<IconButton icon="code" />
<IconButton icon="cloud-off" color="dark" />
<IconButton icon="chevrons-right" color="red" />
<IconButton icon="printer" title="print" color="green" />
<IconButton icon="chevrons-right" title="Next" color="yellow" />
```

```js
import { Button, IconButton } from 'dayler-ui';
import { Link } from 'react-router-dom';

<Link to="/buttons">
    <IconButton icon="hash" />
</Link>

<Link to="/buttons">
    <IconButton icon="share" color="dark" />
</Link>

<Link to="/buttons">
    <IconButton icon="slack" color="red" />
</Link>

<Link to="/buttons">
    <IconButton icon="shopping-cart" title="Buy" color="green" />
</Link>

<Link to="/buttons">
    <Button title="Next" color="yellow" />
</Link>
```

#### Inputs
```js
import { Input } from 'dayler-ui';

<Input placeholder="Text Input" />
<Input placeholder="Text Input with Label" label="Input Label" />
```

```js
import { Button, Input } from 'dayler-ui';

<div style={{ display: 'flex' }}>
    <Input placeholder="Text Input with button"
        outerStyle={{ width: 200, marginRight: 10 }}
    />
    <Button title="Submit" color="red" />
</div>
```

```js
import { Button, Input } from 'dayler-ui';

<Input placeholder="Text Input with button"
    outerStyle={{ width: 200, marginBottom: 10 }}
/>
<Button title="Submit" color="red" />
```

#### Tabs
```js
import { TabsRouter } from 'dayler-ui';

import TabInitial from './TabInitial';
import TabUsage from './TabUsage';

export default class Tabs extends Component {
    routes = [{
        component: TabInitial,
        exact: true,
        path: '',
        title: 'Initial Tab',
    }, {
        component: TabUsage,
        exact: true,
        path: '/usage',
        title: 'Usage',
    }];

    render() {
        return (
            <TabsRouter routes={this.routes} />
        );
    }
}
```

#### Checkboxes
```js
import { Checkbox } from 'dayler-ui';

<Checkbox title="Default" />
<Checkbox title="Red" color="red" />
<Checkbox title="Green" color="green" />
<Checkbox title="Yellow" color="yellow" />
<Checkbox title="Dark" color="dark" />
```

#### Switches
```js
import { Switch } from 'dayler-ui';

<Switch title="Default" />
<Switch title="Red" color="red" />
<Switch title="Green" color="green" />
<Switch title="Yellow" color="yellow" />
<Switch title="Dark" color="dark" />
```

#### Radio
```js
import { Radio } from 'ui';

const { checkedRadio } = this.state;
<Radio title="Default"
    checked={checkedRadio === "1"}
    onChange={this.handleRadioChange}
    value="1"
/>
<Radio title="Red"
    checked={checkedRadio === "2"}
    color="red"
    onChange={this.handleRadioChange}
    value="2"
/>
<Radio title="Green"
    checked={checkedRadio === "3"}
    color="green"
    onChange={this.handleRadioChange}
    value="3"
/>
<Radio title="Yellow"
    checked={checkedRadio === "4"}
    color="yellow"
    onChange={this.handleRadioChange}
    value="4"
/>
<Radio title="Dark"
    checked={checkedRadio === "5"}
    color="dark"
    onChange={this.handleRadioChange}
    value="5"
/>
```

#### Crop
```js
import React, { Component } from 'react';
import { Avatar, Button, Crop } from 'dayler-ui';

export default class MyClass extends Component {
    state = {
        image: 'https://cdn.dayler.io/images/avatar.svg',
    };

    handleChange = image => {
        this.setState({ image });
    };

    handleClick = () => {
        this.cropper.click();
    }

    render() {
        return (
            <div>
                <Avatar image={image} size={200} />
                <Button title="change" onClick={this.handleClick} />
                <Crop node="root"
                    onChange={this.handleChange}
                    onMount={referance => this.cropper = referance}
                    height={500}
                    width={760}
                    size={100}
                    x={20}
                    y={30}
                />
            </div>
        );
    }
}
```

#### Snackbar
```js
import React, { Component } from 'react';
import { Button, Snackbar } from 'dayler-ui';

export class SnackBarExample extends Component {
    handleAlert = () => {
        const options = {
            type: 'red', // default: 'dark', should be one of ['dark', 'red', 'green', 'yellow']
            duration: 4000, // default 4000ms
        }

        this.snackBar('Snackbar title', options);
    }

    render() {
        return (
            <div>
                <Snackbar onMount={referance => this.snackBar = referance}
                    duration={4000}
                    node="root"
                    position="NE"
                    type="dark"
                />

                <Button title="Show Snackbar" onClick={this.handleAlert} />
            </div>
        );
    }

}
```


---
*Made with* :heart: *for [Dayler.io](https://dayler.io)*
