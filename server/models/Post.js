const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date().getTime(),
    }
}, { timestamps: true });

module.exports = mongoose.model("Post", PostSchema);