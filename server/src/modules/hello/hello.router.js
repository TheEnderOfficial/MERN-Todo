const helloController = require('./hello.controller');

const Router = require('express').Router;

const helloRouter = Router();

helloRouter.get("/", helloController.hello);

module.exports = helloRouter;