const mongoose = require('mongoose');

const { MONGO_URL } = process.env;

const connect = () => mongoose.connect(MONGO_URL || 'mongodb://localhost:27017/todo-mern');

module.exports = {
    connect
}