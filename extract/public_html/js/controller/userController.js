/**
@author christian vath | norber rodríguez
@version 1.4
@name userController
@description controller of user form, to manage userObject in finalObject
@date 24/02/2017
**/
(function () {
  angular.module('scapeRoomApp').controller('userController', function ($scope, $window) {

    // Controller properties
    // Scope variables
    $scope.user= new User();
    $scope.user.construct("","","");

    $scope.setUserReservation = function(){
      $scope.$parent.reservationToInsert.setUserObject($scope.user);
      $scope.$parent.showAction=2;
    }
    /*
    $scope.setReservation = function(){
    $scope.reservation.setEvent($scope.eventToInsert);
    //añadir objeto al padre
    $scope.$parent.reservationToInsert.setReservationObject($scope.reservation);
    //alert($scope.addReservation);
    alert($scope.$parent.reservationToInsert.getReservationObject().getDate());
    $scope.$parent.showAction=4;
  }
  */



}); // END Controller

/**
*
*/
angular.module('scapeRoomApp').directive("userForm", function () {
  return {
    restrict: 'E', // type of directive
    templateUrl: "view/templates/user-form.html",
    controller: function () {
      // When the document is ready execute this code
    },
    controllerAs: 'userForm' // This is the alias
  };
});



})(); // END Angula function
