import('./base.styl')
import 'dayler-ui'

import React, { lazy, PureComponent, Suspense } from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Header, Layout } from './components'

const IndexRoute = lazy(() => import('./routes/IndexRoute'))

const root = 'div#root'
    |> document.querySelector

@hot
class App extends PureComponent {
    render() {
        return <BrowserRouter>
            <Layout>
                <Header />
                {/* TODO: replace <null> with page preloader component */}
                <Suspense fallback={null}>
                    <Switch>
                        <Route exact path={['/']} component={IndexRoute} />
                        <Redirect to="/" />
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    }
}

render(
    <App />,
    root
)
