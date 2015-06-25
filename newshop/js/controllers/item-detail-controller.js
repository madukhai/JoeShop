angular.module('joeShopping')
.controller('ItemDetailController', function($http, $routeParams){
	
	var controller = this;
	
	$http({method: 'GET', url : '/shopping/' + $routeParams.id})
	.success(function(data){
		controller.item = data;
	})
});

