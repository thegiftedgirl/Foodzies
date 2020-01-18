const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: String,
}, {
    timestamps: true
});


const roomSchema = new Schema({
    title: String,
    recipe: {
        type: String,
        default: 'Here\'s something Interesting About This Topic'
    },
    photoURL: {
        type: String,
        default: 'https://www.bing.com/th?id=OIP.ISK0kbvLUbQTc9hltD47fAHaF0&pid=Api&rs=1'
    },
    comments: [commentSchema],
}, {
    timestamps: true
});







module.exports = mongoose.model('Room', roomSchema);