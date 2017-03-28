/**
@author christian vath | norber rodríguez
@version 1.4
@name paymentController
@description controller of payment form to manage paymentObject in finalObject
@date 24/02/2017
**/
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('scapeRoomApp').controller('paymentController', function($scope, $window) {
		$scope.payment = new payDataObject();

		$scope.getReservation = function(){
			//añadir objeto al padre
			$scope.payment.setDni($scope.$parent.reservationToInsert.getUserObject().getDni());
			$scope.$parent.reservationToInsert.setPayDataObject($scope.payment);
			//alert($scope.addReservation);
			//alert($scope.$parent.reservationToInsert.getUserObject().getDni());
			$scope.$parent.showAction=5;
		}

	});

	angular.module('scapeRoomApp').directive("paymentForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/payment-form.html",
			controller:function(){

			},
			controllerAs: 'paymentForm'
		};
	});
})();
