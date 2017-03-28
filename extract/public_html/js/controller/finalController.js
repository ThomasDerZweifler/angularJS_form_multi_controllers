// jQuery code
$(document).ready(function () {

});
/**
@author christian vath | norber rodríguez
@version 1.4
@name finalController
@description controller of final form does nothing
@date 24/02/2017
**/
//Angular code
(function (){
	angular.module('scapeRoomApp').controller('finalController', function($scope, $window) {


	});

	angular.module('scapeRoomApp').directive("finalForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/final-form.html",
			controller:function(){

			},
			controllerAs: 'finalForm'
		};
	});
})();
