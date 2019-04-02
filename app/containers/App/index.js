import React from 'react'
import { hot } from 'react-hot-loader'

import { Header, Layout } from 'app/components'

import classes from './classes.styl'

const AppContainer = ({ ...props }) => (
    <Layout {...props} overrides={{ container: classes.container }}>
        <Header />
        ...
    </Layout>
)

export const App = AppContainer
    |> (module |> hot)
