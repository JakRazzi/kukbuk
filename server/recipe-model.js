var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  name: String,
  description: String,
  ingredients: {
    type: Array,
    default: []
  },
  instructions: String
})

module.exports.Recipe = mongoose.model('Recipe', recipeSchema);
