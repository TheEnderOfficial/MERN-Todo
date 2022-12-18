const Message = require('./models/message.model');

module.exports = {
    async createMessage(message) {
        let newMessage = new Message({
            message: message
        });
        return await newMessage.save();
    },
    async getMessages() {
        return await Message.find();
    },
    async getMessage(id) {
        return await Message.findById(id);
    },
    async updateMessage(id, message) {
        return await Message.findByIdAndUpdate(id, {
            $set: {
                message: message
            }
        })
    },
    async deleteMessage(id) {
        return await Message.deleteOne({_id: id});
    }
}