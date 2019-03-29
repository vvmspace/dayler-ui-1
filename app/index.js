import React from 'react'
import { render } from 'react-dom'
import { App } from './containers'

const root = '#root'
    |> document.querySelector

render(<App />, root)
