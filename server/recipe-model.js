var mongoose = require('mongoose');

var recipeSchema = mongoose.schema({
  name: String,
  description: String,
  ingredients: {
    type: Array,
    default: []
  },
  instructions: String
})

module.exports.Recipe = mongoose.model('Recipe', recipeSchema);
