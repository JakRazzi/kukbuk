var app = angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngTouch',
  'ui.bootstrap'
])

.controller('recipeList', function($scope, $window, RecipeHandler) {
  var init = function() {
    RecipeHandler.getAll(function(recipies) {
      $scope.recipeList = recipies;
    })
  };

  $scope.goToRecipe = function(recipe) {
    RecipeHandler.setTemp(recipe);
    $window.location.href = '/#/view-recipe'
  };

  init();
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
      method: 'POST',
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

  var getAll = function(callback) {
    return $http({
      method: 'GET',
      url: '/api/recipies',
    })
    .then(function(response) {
      callback(response.data);
    })
    .catch(function(err) {
      console.error(err);
    })
  };

  var setTemp = function(recipe) {
    tempRecipe = recipe;
  }
  var getTemp = function(recipe) {
    return tempRecipe;
  }

  return {
    post: post,
    getAll: getAll,
    setTemp: setTemp,
    getTemp: getTemp
  }
});