const helloService = require("./hello.service");

module.exports = {
    async getMessages(req, res) {
        const messages = await helloService.getMessages();
        res.json(messages);
    },
    async getMessage(req, res) {
        const message = await helloService.getMessage(req.params.id);
        res.json(message);
    },
    async createMessage(req, res) {
        const message = await helloService.createMessage(req.body.message);
        res.json(message);
    },
    async updateMessage(req, res) {
        const message = await helloService.updateMessage(req.params.id, req.body.message);
        res.json(message);
    },
    async deleteMessage(req, res) {
        const message = await helloService.deleteMessage(req.params.id);
        res.json(message);
    }
}