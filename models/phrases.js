var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var PhraseSchema = new Schema({
	word: String,
	definition: String,
});

var Phrase = mongoose.model('Phrase', PhraseSchema);
module.exports = Phrase;