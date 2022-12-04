const mongoose = require('mongoose');

let inputSchema = new mongoose.Schema({
    inputData: String
});

module.exports = mongoose.model("User", inputSchema);