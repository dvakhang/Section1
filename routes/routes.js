const express = require("express");
const routes = express.Router();
const dashboardController = require("../controller/dashboardController")


routes.get("/dashboard", dashboardController.getIndex);


module.exports = routes;