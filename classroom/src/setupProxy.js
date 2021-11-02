const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/", { target: "https://btcn3-18127186-server.herokuapp.com" }));
};