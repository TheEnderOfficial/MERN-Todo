module.exports = function (app, module) {
    console.log("Mapping module:", module.name)

    module.routers.forEach(router => {
        module.middlewares.forEach(middleware => {
            router.use(middleware)
        })
        app.use(router)
    })
}