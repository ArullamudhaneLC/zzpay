// // src/setupProxy.js
// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     "/api", // Match the URL pattern you want to proxy
//     createProxyMiddleware({
//       target: "https://finovaapay-backend-lk9fu.ondigitalocean.app", // The target API server
//       changeOrigin: true, // Ensure the origin header matches the target API server
//       secure: true, // Set to false if you're using a self-signed SSL certificate
//       pathRewrite: {
//         "^/api": "", // Remove the /api prefix before forwarding the request
//       },
//       logLevel: "debug", // Optional: Logs detailed information about proxy requests
//     })
//   );
// };
