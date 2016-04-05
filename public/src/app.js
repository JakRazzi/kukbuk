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

  $scope.submitRecipe = function() {
    RecipeHandler.post($scope.recipe);
    $window.location.href = '/#/view-recipe'
  }
})

.controller('viewRecipe', function($scope, RecipeHandler) {
  var init = function() {
    $scope.recipe = RecipeHandler.getTemp();
  };

  init();
})

.factory('RecipeHandler', function($http) {
  var tempRecipe = {};

  var post = function(recipe) {
    setTemp(recipe);
    return $http({
      method: 'Post',
      url: '/api/recipies',
      data: recipe
    })
    .then(function(recipe) {
      return recipe;
    })
    .catch(function(err) {
      console.error(err);
    })
  }

  var setTemp = function(recipe) {
    tempRecipe = recipe;
  }
  var getTemp = function(recipe) {
    return tempRecipe;
  }

  return {
    post: post,
    setTemp: setTemp,
    getTemp: getTemp
  }
});