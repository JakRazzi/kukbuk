var app = angular.module('app', [
  'ui.router',
  'ngAnimate',
  'ngTouch',
  'ui.bootstrap'
])

.controller('recipeList', function($scope) {
  $scope.recipieList = [];
})

});