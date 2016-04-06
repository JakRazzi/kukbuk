var recipeControl = require('./recipe-controller.js');

module.exports = function(app, express) {
  app.get('/api/recipes', recipeControl.getRecipes);
  app.post('/api/recipes', recipeControl.postRecipe);
  app.delete('/api/recipes', recipeControl.deleteRecipe);
}