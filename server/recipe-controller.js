var Recipe = require('./recipe-model.js');

module.exports = {
  getRecipes: function(req, res) {
    Recipe.find()
    .exec(function(err, recipes) {
      if (err) return console.error(err);
      res.send(recipes);
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