angular.module('joeShopping')
.controller('CartController', ['$scope', function($scope) {
  $scope.cart = {
    title: 'Your Cart',
    price: '1600.00'
  };
}])
.directive('myCart', function() {
  return {
	restrict: 'E',
    templateUrl: './templates/pages/main/my-cart.html'
  };
});