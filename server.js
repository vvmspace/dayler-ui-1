const http = require('http');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const webpack = require('webpack');
const config = require('./webpack');

const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);
const compiler = webpack(config);

app.disable('x-powered-by');
app.use(helmet.noCache());

/* set server middleware */
const middleware = DEBUG
    ? require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        index: 'index.html',
        stats: { colors: true },
    })
    : (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html'));

app.use(express.static(path.resolve(__dirname, 'dist')));
app.use(middleware);
app.use('*', middleware);

server.listen(PORT);
