const express = require("express");
const proxy = require("http-proxy-middleware");
const config = require("./config");

const apiUrl = (resource) =>
  `${config.apiUrl}anbdata/airports/weather/${resource}&api_key=${config.apiKey}&format=json`;

const proxyTo = (routerFn) => proxy({
  target: config.apiUrl,
  changeOrigin: true,
  router: routerFn,
});

const app = express();
app.get("/api/airports", proxyTo(req => apiUrl(`metar-stations-list?airports=&states=`)));
app.get("/api/airports/:airportCode/metar", proxyTo(req => apiUrl(`current-conditions-list?airports=${req.params.airportCode}`)));
app.use(express.static("public"));

module.exports = app;