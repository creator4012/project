// We will need our mongoose library
const mongoose = require(`mongoose`);

// Schema
const Schema1 = mongoose.Schema;

const task1Schema = new Schema1({
  name: String,
  author: String,
  affiliation: Number
})

// Exporting our resource model

module.exports = mongoose.model('resource', task1Schema );
