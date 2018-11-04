const express = require("express");
const app = express();

const appConfig = require("../src/config/main-config.js");
const routeConfig = require("../src/config/route-config.js");

appConfig.init();
routeConfig.init(app);


module.exports = app;

