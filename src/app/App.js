import('./stylus/base.styl')
import 'dayler-ui'

import React, { lazy, PureComponent, Suspense } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Content, Header, Layout } from './components'

const FeatherRoute = lazy(() => import('./routes/FeatherRoute'))
const IndexRoute = lazy(() => import('./routes/IndexRoute'))
const TypingsRoute = lazy(() => import('./routes/TypingsRoute'))

@hot
export default class App extends PureComponent {
    render() {
        return <BrowserRouter>
            <Layout>
                <Header />
                {/* TODO: replace <null> with page preloader component */}
                <Content>
                    <Suspense fallback={null}>
                        <Switch>
                            <Route exact path={['/']} component={IndexRoute} />
                            <Route path={['/feather']} component={FeatherRoute} />
                            <Route path={['/typings']} component={TypingsRoute} />

                            <Redirect to="/" />
                        </Switch>
                    </Suspense>
                </Content>
            </Layout>
        </BrowserRouter>
    }
}
