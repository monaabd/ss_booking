import React, { Component } from 'react';
import '../css/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Calendar_in_booking from './calendar_in_booking';

var nogood;
var result;

class Booking extends Component {
	constructor(props){
    super(props);
        this.state = {
            startDate: moment(),
            endDate: moment(),
            car: ''
        };
        this.showVehicleInfo = this.showVehicleInfo.bind(this);
        this.bookedCar = this.showVehicleInfo.bind(this);
				this.apiBook = this.apiBook.bind(this);
    }
    showVehicleInfo(){
  			nogood = this.props.bookingid;
        const _this = this;

       fetch('/vehicles')
		   .then(function(response) {
		       return response.json();
		   }).then(function(data) {

        for (var i = 0; i < data.length; i++) {
            if(nogood === data[i]._id){

		        // first make an li element for every car.
		        var listitem = document.createElement("LI");
		        listitem.id = data[i]._id;
		        listitem.innerHTML = data[i].brand;

		        document.getElementById("car").appendChild(listitem);
		        }
    		}// end for loop
    	}) // end get*/
		} // end showvehicleinfo

    apiBook(){
			let id = this.props.bookingid;
			let dates = {
				start: this.state.startDate,
				end: this.state.endDate
			}
			console.log("Id:", id);
			console.log("Dates:", dates);
	    fetch("/vehicles/book/"+id, {
	      method: "PUT",
				body: JSON.stringify(dates),
	      headers: {
	       'Accept': 'application/json',
	       'Content-Type': 'application/json'
	     }
	    }).then(function(response){
	    });
		}
    render() {

    	return(
    		<div id="booking">

                <div>{this.showVehicleInfo()}</div>
                <ul id="car" />
    			<h1>Your booking information</h1>
                <div>{this.props.bookingid}</div>
                <p>From:{this.props.from}</p>
                <p>To:{this.props.to}</p>
                <Calendar_in_booking />
                <button onClick={this.apiBook}>Confirm</button>
    		</div>
    		);
    }

  }

  export default Booking;
