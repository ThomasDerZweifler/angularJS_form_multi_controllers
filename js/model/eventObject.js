function eventObject ()
{
	//Attributes declaration
	this.id;
	this.name;
	this.description;
	this.image;
	this.price;
	this.groupName;


        this.construct = function(id, name, description, image, price){
            this.id = id;
            this.name = name;
            this.description = description;
            this.image = image;
            this.price = price;
        }

				this.setGroupName = function(groupName){
					this.groupoName = groupName;
				}
        this.setId = function(id){
            this.id = id;
        }
        this.setName = function(name){
            this.name = name;
        }
        this.setDescription = function(description){
            this.description = description;
        }
        this.setImage = function(image){
            this.image = image;
        }
        this.setPrice = function(price){
            this.price = price;
        }

				this.getGroupName = function(){
					return this.groupName;
				}
        this.getId = function(){
            return this.id;
        }
        this.getName = function(){
            return this.name;
        }
        this.getDescription = function(){
            return this.description;
        }
        this.getImage = function(){
            return this.image;
        }
        this.getPrice = function(){
            return this.price;
        }









}
