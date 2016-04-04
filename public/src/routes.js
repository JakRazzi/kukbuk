app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/recipies');

  $stateProvider
    .state('recipeList', {
      url: '/recipies',
      templateUrl: '../partials/recipe-list.html'
    })
});