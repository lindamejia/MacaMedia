const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: "https://localhost:44335/",
      changeOrigin: true,
      secure: false
    })
  );
  // app.use(
  //   proxy("/node", {
  //     target: "http://localhost:8080/node-api",
  //     changeOrigin: true
  //   })
  // );
};
