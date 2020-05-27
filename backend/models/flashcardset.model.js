const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FlashcardSet = new Schema({
    flashcardSet_title: {
        type: String
    },
    flashcardSet_description: {
        type: String
    }
});

module.exports = mongoose.model('FlashcardSet', FlashcardSet);