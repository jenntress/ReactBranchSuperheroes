// superheroes-reactify/client/models/note.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  content: {required: true, type: String}
});

NoteSchema.methods.loadData = function(data){
  this.content = data.content;
}

//to be able to use this, we must export
module.exports = mongoose.model('Note', NoteSchema);
