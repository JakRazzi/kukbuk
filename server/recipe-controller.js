var Recipe = require('recipe-model.js');

module.exports = {
  getRecipies: function(req, res) {
    Recipe.find()
    .exec(function(err, recipies) {
      res.send(recipies);
    })
  },

  postRecipe: function(req, res) {
    var recipe = new Recipe(req.body);
    recipe.save(function(err, recipe) {
      if (err) return console.error(err);
      res.sendStatus(200);
    })
  }
};