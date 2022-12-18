const helloController = require('./hello.controller');

const Router = require('express').Router;

const helloRouter = Router();

helloRouter.get("/", helloController.getMessages);
helloRouter.get("/:id", helloController.getMessage);
helloRouter.post("/", helloController.createMessage);
helloRouter.put("/:id", helloController.updateMessage);
helloRouter.delete("/:id", helloController.deleteMessage);

module.exports = helloRouter;