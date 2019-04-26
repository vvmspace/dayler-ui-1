import('./base.styl')

import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'

@hot
class App extends PureComponent {
    render() {
        return <div>...</div>
    }
}

render(
    <App />,
    document.querySelector('div#root')
)
