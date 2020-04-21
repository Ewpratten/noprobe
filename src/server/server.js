const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


// Setup an Express server
const app = express();
app.use(express.static('public'));

let port = 80;
if (process.env.NODE_ENV === 'development') {
    // Setup Webpack for development
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler));
} else {
    // Static serve the dist/ folder in production
    app.use(express.static('dist'));
}

// Handle port addressing
port = process.env.PORT || 3000;

// Listen on port
const server = app.listen(port);
console.log(`Server listening on port ${port}`);
