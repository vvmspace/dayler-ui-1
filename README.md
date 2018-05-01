# dayler-ui
Dayler.io React UI Kit

[Example](https://ui.dayler.io/)

## Installation
```bash
npm install --save dayler-ui
```

## Usage
```javascript
import 'dayler-ui';
```

### Typings
...

### Colors
* #585C67 (DEFAULT)
* #585C67 (DARK)
* #777F83 (GRAY)
* #66C85F (GREEN)
* #E14839 (RED)
* #F0B458 (YELLOW)

### Panels
```javascript
import { Panel } from 'dayler-ui';

<Panel title="Panel Title" icon="settings">
    ...
</Panel>
```

### Icons
All icons forked from [feather](https://feathericons.com) icons.

```javascript
import { Icon } from 'dayler-ui';


<Icon name="activity" />
```

### Buttons
```javascript
import { Button } from 'dayler-ui';

<Button title="Next" />
<Button title="Next" color="dark" />
<Button title="Next" color="red" />
<Button title="Next" color="green" />
<Button title="Next" color="yellow" />
```

```javascript
import { IconButton } from 'dayler-ui';

<IconButton icon="code" />
<IconButton icon="cloud-off" color="dark" />
<IconButton icon="chevrons-right" color="red" />
<IconButton icon="printer" title="print" color="green" />
<IconButton icon="chevrons-right" title="Next" color="yellow" />
```

```javascript
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

### Inputs
```javascript
import { Input } from 'dayler-ui';

<Input placeholder="Text Input" />
<Input placeholder="Text Input with Label" label="Input Label" />
```

```javascript
import { Button, Input } from 'dayler-ui';

<div style={{ display: 'flex' }}>
    <Input placeholder="Text Input with button"
        groupStyle={{ width: 200, marginRight: 10 }}
    />
    <Button title="Submit" color="red" />
</div>
```

```javascript
import { Button, Input } from 'dayler-ui';

<Input placeholder="Text Input with button"
    groupStyle={{ width: 200, marginBottom: 10 }}
/>
<Button title="Submit" color="red" />
```
### Tabs
...

### Date Picker
...

### Snackbar
...

### Switches
...

### Chart
...
