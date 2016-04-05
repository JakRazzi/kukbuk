var recipeControl = require('./recipe-controller.js');

module.exports = function(app, express) {
  app.get('/api/recipes', recipeControl.getRecipies);
  app.post('/api/recipes', recipeControl.postRecipe)
}