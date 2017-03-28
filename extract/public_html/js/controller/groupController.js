/**
@author christian vath | norber rodríguez
@version 1.4
@name grupController
@description controller of group form
@date 24/02/2017
**/

(function () {
  angular.module('scapeRoomApp').controller('groupController', function ($scope, $window) {

    // Controller properties
    // Scope variables
    $scope.users = [];
    $scope.user = new User();
    $scope.user.construct("", "", "");
    $scope.users.push($scope.user);
    $scope.group = new Group();
    $scope.group.setGroupInformedBy("WhatsApp");
    $scope.group.setUsers($scope.users);

    //Modelo que permite agregar tareas
    $scope.addUser = function (userName, userMovil) {
      this.user = new User();
      this.user.construct(userName, "", userMovil);
      $scope.group.users.push(this.user);
    };

    // Modelo que permite eliminar tarea
    $scope.deleteUser = function (num, user) {
      if($scope.group.users.length>1){
        $scope.group.users.splice(num,1);
      }
    };

    $scope.setReservation = function () {
      //$scope.reservation.setEvent($scope.eventToInsert);
      //añadir objeto al padre
      //$scope.addReservation=finalObject;
      //alert($scope.addReservation);
      var jok=$scope.group.users.length;
      $scope.group.setMaxPlayers(jok);
      $scope.group.setTeamleader($scope.$parent.reservationToInsert.getUserObject());
      $scope.$parent.reservationToInsert.setGroupObject($scope.group);
      //alert($scope.$parent.reservationToInsert.getGroupObject().getMaxPlayers());
      $scope.$parent.showAction = 3;
    };

  }); // END Controller


  /**
  * @name: template add-form-group-view-form
  * @date: 27/01/2017
  * @version: 1
  * @author: christian Vath | norber rodríguez
  * @description: show group form view
  */
  angular.module('scapeRoomApp').directive("groupForm", function () {
    return {
      restrict: 'E', // type of directive
      templateUrl: "view/templates/group-form.html",
      controller: function () {
        // When the document is ready execute this code
      },
      controllerAs: 'groupForm' // This is the alias
    };
  });


})(); // END Angula function
