const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const commentSchema = new Schema({
    content: String,
}, {
    timestamps: true
});

const recipeSchema = Schema({
    title: String,
    date: Date,
    content: String,
    comments: [commentSchema]
},{
    timestamps: true
});
module.exports = mongoose.model('Recipe', recipeSchema);