const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/fonts', // Define a path prefix for your fonts
    createProxyMiddleware({
      target: 'https://themexriver.com',
      changeOrigin: true,
      pathRewrite: {
        '^/fonts': '', // Remove the '/fonts' prefix when making requests to the target
      },
    })
  );
};
