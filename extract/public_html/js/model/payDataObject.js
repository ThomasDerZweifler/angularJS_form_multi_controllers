function payDataObject ()
{
	//Attributes declaration
	this.dni;
	this.creditCard;
	this.cvv;
	this.postalCode;

	this.construct = function(dni,creditCard, cvv, postalCode){
            this.creditCard = creditCard;
            this.cvv = cvv;
            this.postalCode = postalCode;
						this.dni = dni;
        }
	//Methods declaration
	this.setCreditCard = function(creditCard){
            this.creditCard = creditCard;
        }
        this.setCvv = function(cvv) {
            this.cvv = cvv;
        }
        this.setPostalCode = function (postalCode){
            this.postalCode = postalCode;
        }
        this.getCreditCard = function(){
            return this.creditCard;
        }
        this.getCvv = function(){
            return this.cvv;
        }
        this.getPostalCode = function(){
            return this.postalCode;
        }
				this.setDni = function(dni){
					this.dni = dni;
				}
				this.getDni = function(){
					return this.dni;
				}
}
