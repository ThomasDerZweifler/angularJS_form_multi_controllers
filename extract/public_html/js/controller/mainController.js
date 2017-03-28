/**
@author christian vath | norber rodríguez
@version 1.4
@name mainController
@description controller of all controllers, sets the finalObject and rest of controllers can manage it
@date 24/02/2017
*******

Application starts creating an object that contains all objects inside.
Rest of controllers, will set the object inside this object at the end of its form, clicking the button.
Once done all form, application shows important info in html page.
$scope.showAction manages all application views and templates from all controllers

*******

**/
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('scapeRoomApp').controller('mainController', function($scope, $window) {
		$scope.showAction=1;
		$scope.reservationToInsert= new finalReservationObject();


	});
})();
