const { createProxyMiddleware } = require('http-proxy-middleware');
     
module.exports = function(app) {
    app.use(createProxyMiddleware('/', { target: 'https://btcn3-18127186-server.herokuapp.com' }));
};