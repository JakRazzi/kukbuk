app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/recipe-list');

  $stateProvider
    .state('recipeList', {
      url: '/recipe-list',
      templateUrl: '../partials/recipe-list.html'
    })
    .state('createRecipe', {
      url: '/create-recipe',
      templateUrl: '../partials/create-recipe.html'
    })
    .state('viewRecipe', {
      url: '/view-recipe',
      templateUrl: '../partials/view-recipe.html'
    })
});