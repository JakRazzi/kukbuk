var app = angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngTouch',
  'ui.bootstrap'
])

.controller('recipeList', function($scope) {
  $scope.recipeList = {};
})

.controller('createRecipe', function($scope, $window, RecipeHandler) {
   $scope.recipe = {
    name: '',
    description: '',
    ingredients: [],
    instructions: ''
  };
  $scope.ingredient = {
    name: '',
    quantity: ''
  }
  $scope.test = function() {console.log('hello')};

  $scope.addIngredient = function() {
    console.log('inside addIngredient');
    $scope.recipe.ingredients.push($scope.ingredient);
    $scope.ingredient = {
      name: '',
      quantity: ''
    };
  };

});