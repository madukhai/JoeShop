angular.module('joeShopping', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				redirectTo:'/shopping'
				})
			.when('/shopping', {
				templateUrl: 'templates/pages/main/my-shopping.html',
				controller: 'ItemController',
				controllerAs: 'itemCtrl'
				})
			.when('/shopping/:id', {
				templateUrl: 'templates/pages/items/item-details.html',
				controller: function($http, $routeParams){
					var controller = this;
					$http({method: 'GET', url : '/shopping/' + $routeParams.id})
					.success(function(data){
						controller.item = data;
					})}
				})
			.when('/cart', {
				templateUrl: 'templates/pages/main/my-cart.html'
				})
			.when('/locations', {
				templateUrl: 'templates/pages/main/my-locations.html'
			})
			.otherwise({redirectTo:'/'});
			
		}]);
	