![logo](https://cdn.dayler.io/images/logo_dark.svg)
---
[![npm version](https://badge.fury.io/js/dayler-ui.svg)](https://badge.fury.io/js/dayler-ui)

Dayler React Components

#### Api with examples
[https://ui.dayler.io](https://ui.dayler.io)

#### Installation
```bash
npm install --save dayler-ui
```

#### Usage
##### Panels
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

##### Icons
[Feathericons](https://feathericons.com)

```js
import { Icon } from 'dayler-ui';

<Icon name="activity" />
```

##### Buttons
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

##### Inputs
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

##### Tabs
```js
import { TabsRouter } from 'dayler-ui';

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
        // You MUST provide router props as {...this.props}
        return (
            <TabsRouter routes={this.routes} {...this.props} />
        );
    }
}
```

##### Checkboxes
```js
import { Checkbox } from 'dayler-ui';

<Checkbox title="Default" />
<Checkbox title="Red" color="red" />
<Checkbox title="Green" color="green" />
<Checkbox title="Yellow" color="yellow" />
<Checkbox title="Dark" color="dark" />
```

##### Switches
```js
import { Switch } from 'dayler-ui';

<Switch title="Default" />
<Switch title="Red" color="red" />
<Switch title="Green" color="green" />
<Switch title="Yellow" color="yellow" />
<Switch title="Dark" color="dark" />
```


---
*Made with* :heart: *for [Dayler.io](https://dayler.io)*
