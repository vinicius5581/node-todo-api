var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = {mongoose};
