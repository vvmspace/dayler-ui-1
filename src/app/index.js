import React from 'react'
import { render } from 'react-dom'
import App from './App'

const root = 'div#root'
    |> document.querySelector

render(<App />, root)
