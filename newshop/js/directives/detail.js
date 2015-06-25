angular.module('joeShopping')
.directive('itemDetails', function(){
	return {
		restrict:'E',
		templateUrl: 'templates/pages/items/item-details.html'
	};
	
})
.controller('ItemDetailController',['$htp', '$routeParams', function($http, $routeParams){
	var controller = this;
	
	$http({method: 'GET', url : '/shopping/' + $routeParams.id})
	.success(function(data){
		controller.item = data;
	})
}])

;