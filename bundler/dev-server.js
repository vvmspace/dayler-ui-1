const express = require('express')
const http = require('http')
const opn = require('opn')
const webpack = require('webpack')

const config = require('./index')

const port = process.env.PORT || 8080

const app = express()
const server = http.createServer(app)
const compiler = webpack(config)

const hmr = require('webpack-hot-middleware')(compiler)
const middleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    index: 'index.html',
    stats: { colors: true },
})

app.use(hmr)
app.use(middleware)
app.use('*', middleware)

server.listen(port)

if (process.argv.includes('--open')) {
    opn(`http://localhost:${port}`)
}
