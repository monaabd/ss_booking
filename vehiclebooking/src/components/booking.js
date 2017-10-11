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

                    //a div with all the selected car info
                    var selectedCarInfo = document.createElement('div');
                    selectedCarInfo.style.textAlign = 'left';
                    selectedCarInfo.style.marginLeft = '30px';
                    selectedCarInfo.id = data[i]._id;
                    selectedCarInfo.className = 'boxUnderCarImage';

                    // a div with the car brand and model
                    var carBrand_Model = document.createElement('h3');
                    carBrand_Model.innerHTML = data[i].brand + ', ' + data[i].model;

                    // a div with the licence
                    var licence = document.createElement('div');
                    licence.innerHTML = 'Driving licence: ' + data[i].requiredDrivingLicense;

                    // a div with the gear box
                    var gearBox = document.createElement('div');
                    gearBox.innerHTML = 'Gear box: ' + data[i].gearbox;

                    // a div with price per day
                    var price = document.createElement('div');
                    price.innerHTML = 'Price/day: ' + data[i].dagshyra;



                    // append all our created elements on selectedCarInfo
                    selectedCarInfo.appendChild(carBrand_Model);
                    selectedCarInfo.appendChild(licence);
                    selectedCarInfo.appendChild(gearBox);
                    selectedCarInfo.appendChild(price);

                    document.getElementById("selectedCar").appendChild(selectedCarInfo);
            }

      
    }// end for loop    

    }) // end get*/
} // end showvehicleinfo

/*
     apiAdd(){
    let car = JSON.stringify(this.props.newCar);
    fetch("/vehicles", {
      method: "POST",
      body: car,
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     }
    }).then(function(response){
    });
*/



    render() {

    	return(
    		<div id="booking" className= "individualContainer">
                <div>{this.props.bookingid}</div> 
                <h1>Your booking information</h1>
                <div>{this.showVehicleInfo()}</div>
                <div id="selectedCar"></div>
                <h4>Selected dates:</h4>
                <p>Pick-up date: {this.props.from}, Drop-off date: {this.props.to}</p>
                <Calendar_in_booking />
                <button>Confirm</button>
    		</div>	
    		);
    }
  
  }

  export default Booking;
