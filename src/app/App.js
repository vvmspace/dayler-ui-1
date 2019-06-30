import('./stylus/base.styl')
import 'dayler-ui'

import React, { lazy, PureComponent, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import { Content, Layout } from './components'

const ColorsRoute = lazy(() => import('./routes/ColorsRoute'))
const IndexRoute = lazy(() => import('./routes/IndexRoute'))

@hot
export default class App extends PureComponent {
    render() {
        return <BrowserRouter>
            <Layout>
                <Content>
                    <Suspense fallback={null}>
                        <Switch>
                            <Route exact path={['/']} component={IndexRoute} />
                            <Route exact path={['/colors']} component={ColorsRoute} />

                            <Redirect to="/" />
                        </Switch>
                    </Suspense>
                </Content>
            </Layout>
        </BrowserRouter>
    }
}
