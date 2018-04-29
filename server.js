const devMiddleware = require('webpack-dev-middleware')
const express = require('express')
const helmet = require('helmet')
const http = require('http')
const webpack = require('webpack')
const config = require('./webpack')

const PORT = process.env.PORT || 8080

const app = express()
const server = http.createServer(app)
const compiler = webpack(config)

const middleware = devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    index: 'index.html',
    stats: { colors: true },
})

app.disable('x-powered-by')
app.use(helmet.noCache())

app.use(middleware)
app.use('*', middleware)

server.listen(PORT)
