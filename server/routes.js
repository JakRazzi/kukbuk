var recipeControl = require('./recipe-controller.js');

module.exports = function(app, express) {
  app.get('/api/recipies', recipeControl.getRecipies);
  app.post('/api/recipies', recipeControl.postRecipe)
}