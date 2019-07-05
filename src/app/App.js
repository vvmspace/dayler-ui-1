import('./stylus/base.styl')
import 'dayler-ui'

import React, { lazy, PureComponent, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import { Content, Layout, Navigation } from './components'

const IndexRoute = lazy(() => import('./routes/IndexRoute'))
const ButtonsRoute = lazy(() => import('./routes/ButtonsRoute'))
const CardsRoute = lazy(() => import('./routes/CardsRoute'))
const ColorsRoute = lazy(() => import('./routes/ColorsRoute'))

@hot
export default class App extends PureComponent {
    render() {
        return <BrowserRouter>
            <Layout>
                <Navigation />
                <Content>
                    <Suspense fallback={null}>
                        <Switch>
                            <Route exact path={['/']} component={IndexRoute} />
                            <Route exact path={['/buttons']} component={ButtonsRoute} />
                            <Route exact path={['/cards']} component={CardsRoute} />
                            <Route exact path={['/colors']} component={ColorsRoute} />

                            <Redirect to="/" />
                        </Switch>
                    </Suspense>
                </Content>
            </Layout>
        </BrowserRouter>
    }
}
