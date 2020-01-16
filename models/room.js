const mongoose = require('mongoose');

const Schema = mongoose.Schema;





const roomSchema = new Schema({
    title: String,
    photoURL: {
        type: String,
        default: 'https://www.bing.com/th?id=OIP.ISK0kbvLUbQTc9hltD47fAHaF0&pid=Api&rs=1'
    },
    recipes: [
    {type: Schema.Types.ObjectId, ref: "Recipe"}
    ],
}, {
    timestamps: true
});







module.exports = mongoose.model('Room', roomSchema);