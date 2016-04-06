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
  },

  deleteRecipe: function(req, res) {
    if (req.body.password !== 'romulusdogulus') {
      res.sendStatus(500);
      return;
    }
    console.log(req.body.data);
    Recipe.find({name: req.body.data}).remove()
    .exec(function(err) {
      if (err) return console.error(err);
      res.sendStatus(200);
    });
  }
};