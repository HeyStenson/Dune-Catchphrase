var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dune-catchphrase');

module.exports.Phrase = require('./phrases');