import React from 'react'
import { hot } from 'react-hot-loader'

import { Header } from 'app/components'

import classes from './classes.styl'

const AppContainer = ({ ...props }) => (
    <div {...props} className={classes.container}>
        <Header />
    </div>
)

export const App = AppContainer
    |> (module |> hot)
