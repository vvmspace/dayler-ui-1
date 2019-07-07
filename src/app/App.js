import('./stylus/base.styl')
import 'dayler-ui'

import React, { lazy, PureComponent, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import { Content, Layout, Navigation } from './components'

@hot
export default class App extends PureComponent {
    state = {
        isWidth: true,
    }

    handleChangeNavigationWidth = () => {
        this.setState(state => ({ isWidth: !state.isWidth }))
    }

    render() {
        const { isWidth } = this.state

        return <BrowserRouter>
            <Layout>
                <Navigation isWidth={isWidth}
                    onChangeWidth={this.handleChangeNavigationWidth} />
                <Content isWidth={isWidth}>
                    <Suspense fallback={null}>
                        <Switch>
                            <Route exact path={['/']}
                                component={lazy(() => import('./routes/IndexRoute'))} />
                            <Route exact path={['/buttons']}
                                component={lazy(() => import('./routes/ButtonsRoute'))} />
                            <Route exact path={['/cards']}
                                component={lazy(() => import('./routes/CardsRoute'))} />
                            <Route exact path={['/colors']}
                                component={lazy(() => import('./routes/ColorsRoute'))} />
                            <Route exact path={['/icons']}
                                component={lazy(() => import('./routes/IconsRoute'))} />

                            <Redirect to="/" />
                        </Switch>
                    </Suspense>
                </Content>
            </Layout>
        </BrowserRouter>
    }
}
