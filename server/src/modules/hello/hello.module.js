const helloRouter = require("./hello.router");

module.exports = {
    name: 'hello', // Module name
    routers: [
        // Add routers here
        helloRouter
    ],
    middlewares: [
        // Add middlewares here
    ]
}