// const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');


const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/build/',
  stats: {
    colors: true,
    chunks: false,
  }
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname));

const port = process.env.PORT || 8071;
 
module.exports = app.listen(port, () => {
  console.log('Server listening on http://localhost:' + port + ', Ctrl + C to stop.');
});
