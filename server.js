//Install express server
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const APP = express();
const HOST = 'https://meldane.herokuapp.com';
const PORT = 8080;

// serve only static files from dist directory
APP.use(express.static(__dirname + '/dist/meldane'));

// send requests to dist folder and serve index.html (SPA)
APP.get('/ui', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/meldane/index.html'));
});

// Start the app by listening on the default Heroku port
APP.listen(process.env.PORT || PORT, () => {
    console.log(`Starting Proxy at ${ HOST }:${ process.env.PORT || PORT }`);
});
