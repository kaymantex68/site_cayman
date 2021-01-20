const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware("/SendOrder", {
        target: "http://localhost:3001/SendOrder",
        changeOrigin: true
    }));
}