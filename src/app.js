const express = require("express");
const app = express();

const routeConfig = require("../src/config/route-config.js");
routeConfig.init(app);


module.exports = app;

