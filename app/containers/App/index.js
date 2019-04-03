import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Header, Layout } from 'app/components'

import {
    IndexRoute,
} from 'app/routes'

const AppContainer = ({ ...props }) => (
    <BrowserRouter>
        <Layout {...props}>
            <Header />
            <Switch>
                <Route exact path={['/']} component={IndexRoute} />
                <Redirect to="/" />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export const App = AppContainer
    |> (module |> hot)
