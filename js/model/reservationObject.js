/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function reservationObject ()
{
	//Attributes declaration
        this.event;
        this.date;
        this.hour;

        this.construct = function(event, date, hour){
            this.event = event;
            this.date = date;
            this.hour = hour;
        }

        this.setEvent = function(event){
            this.event = event;
        }
        this.setDate = function(date){
            this.date = date;
        }
        this.setHour = function(hour){
            this.hour = hour;
        }

        this.getEvent = function(){
            return this.event;
        }
        this.getDate = function(){
            return this.date;
        }
        this.getHour = function(){
            return this.hour;
        }
}
