function finalReservationObject ()
{
	//Attributes declaration
	this.payDataObject;
	this.reservationObject;
	this.userObject;
  this.groupObject;
	this.reservationDate = new Date();

	this.construct = function(payDataObject, reservationObject, userObject, groupObject){
            this.payDataObject = payDataObject;
            this.reservationObject = reservationObject;
            this.userObject = userObject;
            this.groupObject = groupObject;
        }

				this.setDate = function(date){
					this.date = date;
				}
	       this.setPayDataObject = function(payDataObject){
            this.payDataObject = payDataObject;
        }
        this.setReservationObject = function(reservationObject) {
            this.reservationObject = reservationObject;
        }
        this.setUserObject = function (userObject){
            this.userObject = userObject;
        }
        this.setGroupObject = function(groupObject){
          this.groupObject = groupObject;
        }

				this.getReservationDate = function(){
					return this.reservationDate;
				}
        this.getGroupObject = function(groupObject){
          return this.groupObject;
        }
        this.getPayDataObject = function(){
            return this.payDataObject;
        }
        this.getReservationObject = function(){
            return this.reservationObject;
        }
        this.getUserObject = function(){
            return this.userObject;
        }
}
