// jQuery code
$(document).ready(function () {

});


/**
@author christian vath | norber rodríguez
@version 1.4
@name eventController
@description controller of event form
@date 24/02/2017
**/
(function (){
	angular.module('scapeRoomApp').controller('eventController', function($scope, $window) {

		$scope.Time=["16:00", "18:00", "20:00", "22:00"];
		$scope.allEvents=[];
		$scope.reservation = new reservationObject();
		$scope.reservation.setHour($scope.Time[0]);
		$scope.eventToInsert = new eventObject();
		$scope.reservation.setDate(new Date());



		var targetEventA= new eventObject();
		targetEventA.setId(1);
		targetEventA.setName("The adventures of MVC");
		targetEventA.setDescription("An exciting adventure where you will have to face different versions of the famous pattern Model-View-Controller ... Only for the bravest!")
		targetEventA.setImage("images/mvc.jpg");
		targetEventA.setPrice("120");
		$scope.allEvents.push(targetEventA);

		var targetEventB = new eventObject();
		targetEventB.setId(2);
		targetEventB.setName("All Java GUI in 3 hours");
		targetEventB.setDescription("Do You have a boring life? Do you need strong experiences? Dare to master the interfaces in Java! If you do not dominate them in three hours, you're suspended!")
		targetEventB.setImage("images/javagui.jpg");
		targetEventB.setPrice("150");
		$scope.allEvents.push(targetEventB);

		var targetEventC = new eventObject();
		targetEventC.setId(3);
		targetEventC.setName("Dominate the world or die in the attempt with javascript!");
		targetEventC.setDescription("Do you like risk You have nothing to lose? Dare with javascript and angular, the language where nothing can work for a semicolon, or it can work everything ... without you knowing why!")
		targetEventC.setImage("images/jsangular.JPG");
		targetEventC.setPrice("300");
		$scope.allEvents.push(targetEventC);

		$scope.eventToInsert = $scope.allEvents[0];

		/*	this.id;
		this.name;
		this.description;
		this.image;
		this.price;*/
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];
		$scope.dateOptions = {
			//dateDisabled: disabled,
			formatYear: 'yyyy',
			maxDate: new Date(2017, 12, 31),
			minDate: new Date(),
			startingDay: 1
		};
		$scope.checkInDate = {
			opened: false
		};
		$scope.openCheckInDate = function() {
			$scope.checkInDate.opened = true;
		};
		$scope.setTotalPrice = function(){
			//TODO
			//$scope.reservation.setTotalPrice($scope.eventToInsert.getPrice()
		}
		$scope.setReservation = function(){
			$scope.reservation.setEvent($scope.eventToInsert);
			//añadir objeto al padre
			$scope.$parent.reservationToInsert.setReservationObject($scope.reservation);
			//alert($scope.addReservation);
			//alert($scope.$parent.reservationToInsert.getReservationObject().getDate());
			$scope.$parent.showAction=4;
		}

	});

	angular.module('scapeRoomApp').directive("eventForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/event-form.html",
			controller:function(){

			},
			controllerAs: 'eventForm'
		};
	});
})();


//Own code
/*
Datepicker functions
*/
// Disable weekend selection
function disabled(data) {
	var date = data.date,
	mode = data.mode;
	return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
}
//Properties
/*$scope.reservation = new reservationObj();
$scope.reservation.setTotalPrice(50);
$scope.reservation.setCheckInDate(new Date());
$scope.reservation.setCheckOutDate((new Date()).setDate((new Date()).getDate() + 1));


;

//Scope variables
$scope.validDates = true;
$scope.specialRequests= ["Breakfast in the room", "Dinner on the roof ", "Romantic visit of the city"];
$scope.checkInTime = ["00:00", "01:00","02:00"];
$scope.checkOutTime = ["00:00", "01:00","02:00"];

//Date pickers scope variables and functions
$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
$scope.format = $scope.formats[0];
$scope.dateOptions = {
dateDisabled: disabled,
formatYear: 'yyyy',
maxDate: new Date(2020, 5, 22),
minDate: new Date(),
startingDay: 1
};

$scope.checkInDate = {
opened: false
};

$scope.checkOutDate = {
opened: false
};

$scope.openCheckInDate = function() {
$scope.checkInDate.opened = true;
};

$scope.openCheckOutDate = function() {
$scope.checkOutDate.opened = true;
};

$scope.validateDates = function() {
if($scope.reservation.getCheckOutDate() <= $scope.reservation.getCheckInDate()) {
// TODO show errors, try to change the validity for the model
//console.log($scope.reservationManagement);
//$scope.reservationManagement.checkInDate.$invalid = true;
//$scope.reservationManagement.checkOutDate.$invalid = true;
//$scope.reservationManagement.$invalid = true;
$scope.validDates = false;
} else {
$scope.validDates = true;

// TODO add the price somewhere in an attribute
$scope.reservation.setTotalPrice(
calculateNumberDays(
$scope.reservation.getCheckInDate(),
$scope.reservation.getCheckOutDate()
) * 50
);
}
}

$scope.specialReqMng = function (indexChecked) {
if($("#specialReq"+indexChecked).is(":checked")) {
$scope.reservation.addSpecialRequests($scope.specialRequests[indexChecked]);
}
else {
$scope.reservation.removeSpecialRequests($scope.specialRequests[indexChecked]);
}
}

this.submit = function () {
console.log($scope.reservation);


$scope.reservation = new reservationObj();

$scope.reservationManagement.$setPristine();
$scope.$parent.showAction = 0;
};*/
