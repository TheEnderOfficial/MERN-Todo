const helloService = require("./hello.service");

module.exports = {
    async hello(req, res) {
        const hello = await helloService.hello();
        res.json(hello);
    }
}