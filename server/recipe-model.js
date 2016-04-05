var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  name: String,
  description: String,
  ingredients: {
    type: Array,
    default: []
  },
  instructions: String,
  keywords: String
})

module.exports = mongoose.model('Recipe', recipeSchema);
