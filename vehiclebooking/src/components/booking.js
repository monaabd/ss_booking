import React, { Component } from 'react';
import '../css/App.css';
import moment from 'moment';
import CalendarInBooking from './calendar_in_booking';

var nogood;

class Booking extends Component {
	constructor(props){
    super(props);
        this.state = {
            startDate: moment(),
            endDate: moment(),
            car: '',
            from: 'nothing',
            to: 'nothing',
            showCalendar: 'none',
            vehicles: []
        };
        this.showVehicleInfo = this.showVehicleInfo.bind(this);
        this.bookedCar = this.showVehicleInfo.bind(this);
		this.apiBook = this.apiBook.bind(this);	
		this.modalopen = this.modalopen.bind(this);	
		this.modalclose = this.modalclose.bind(this);	
		this.changeFrom = this.changeFrom.bind(this);
		this.changeFromB = this.changeFromB.bind(this);
		this.changeToB = this.changeToB.bind(this);
		this.changeTo = this.changeTo.bind(this);
    }


	//calls the GET, from DB to display vehicle info.
    showVehicleInfo(){
        console.log('showVehicleInfo() is running: GET fetch');
		var theinfo = document.getElementById('information');
        if (theinfo == null){
  		nogood = this.props.bookingid;

		fetch('/vehicles')
		.then(function(response) {
			return response.json();
		}).then(function(data) {
			for (var i = 0; i < data.length; i++) {
				if(nogood === data[i]._id){ 
					// a div with the selected car image
					var imageBox = document.createElement('DIV');
            		imageBox.id = 'imageBox';
            		imageBox.style.width = '200px';
            		imageBox.style.height = '150px'; 
            		imageBox.style.border = 'solid 2px gray';
            		imageBox.style.borderRadius = '4px';
            		imageBox.style.textAlign = 'center';
            		imageBox.className = 'flex';

            		var urlString = 'url(' + data[i].imgLink + ')';
            		imageBox.style.backgroundImage = urlString; 
            		imageBox.style.backgroundSize = "cover";
            		imageBox.style.backgroundPosition = 'center';

					//a div with all the selected car info
					var selectedCarInfo = document.createElement('div');
					selectedCarInfo.style.textAlign = 'left';
					selectedCarInfo.style.marginLeft = '30px';
					selectedCarInfo.id = data[i]._id;
					selectedCarInfo.className = 'selectedCarInfo, flex';
					selectedCarInfo.style.width = '150px';
					selectedCarInfo.style.height = '120px';
					selectedCarInfo.style.marginTop = '10px';
					selectedCarInfo.style.border = '1px solid red';


					// a div with the car brand and model
					var carBrand_Model = document.createElement('h3');
					carBrand_Model.innerHTML = data[i].brand + ', ' + data[i].model;
					carBrand_Model.className = 'flex';
					carBrand_Model.style.border = '1px solid green';

					// a div with the licence
					var licence = document.createElement('div');
					licence.innerHTML = 'Driving licence: ' + data[i].requiredDrivingLicense;
					licence.className = 'flex';
					licence.style.border = '1px solid white';
					// a div with the gear box
					var gearBox = document.createElement('div');
					gearBox.innerHTML = 'Gear box: ' + data[i].gearbox;
					gearBox.className = 'flex';
					gearBox.style.border = '1px solid purple';					

					// a div with price per day
					var price = document.createElement('div');
					price.innerHTML = 'Price/day: ' + data[i].dagshyra;
					price.className = 'flex';
					price.style.border = '1px solid cyan';


					let container = document.getElementById("container");

					// append all our created elements on selectedCarInfo
					selectedCarInfo.appendChild(carBrand_Model);
					selectedCarInfo.appendChild(licence);
					selectedCarInfo.appendChild(gearBox);
					selectedCarInfo.appendChild(price);
					container.insertBefore(selectedCarInfo, container.firstChild);
					container.insertBefore(imageBox, container.firstChild);


				} //end if
		    }// end for loop
	    }) // end get
	    } //end if div is empty
	} // end showvehicleinfo


	// this is the booking confirmation pop up. OPEN
	modalopen(){
		console.log(this.state.from);
		console.log(this.props.from);

		if(this.state.from === 'nothing' &&  this.props.from === undefined){
			alert('Please choose date booking');
		}

		else if (this.state.from !== 'nothing' && this.props.from === undefined){
			alert('Please choose date calendar');
		}
		else{
		var modal = document.getElementById('myModal');
		modal.style.display = "block";	
		}
		
	
	}
	// this is the booking confirmation pop up. CLOSE.
	modalclose(){
		var modal = document.getElementById('myModal');
		modal.style.display = "none";
		window.location.reload();  //will also reload the page so booking screen is left on completion.
		this.apiBook();

	}

	//calls the PUT, from DB to send updated dates to vehicle object.
    apiBook(){
        // id of the car that we are about to book.
		let theid = this.props.bookingid;

        // here we add the date for from and to to an object to be sent to mongoDB
		var dates = {
				from: this.props.from,
				to: this.props.to
			}  

       // mongoDB can only handle strings.
        var stringDates = JSON.stringify(dates);

        // Here we put the dates into the vehicle we are booking 
	    fetch("/vehicles/book/"+theid, {
	      method: "PUT",
		  body: stringDates,
	      headers: {
	       'Accept': 'application/json',
	       'Content-Type': 'application/json'
	     }
	    }).then(function(response){
	    });
	}// end apiBook


    update(data) {
        this.setState({
            vehicles: [data]
        });
    }

	changeFrom(date) {
    this.props.from(date); // send date to parent vehicles.js 
  }

  	changeFromB(date) {
    this.setState({
      from: date
    });
    this.props.changeFromV(date);
  }
  	changeToB(date) {
    this.setState({
      to: date
    });
    this.props.changeToV(date);
  }
  changeTo(date) {
    this.props.to(date); // send date to parent vehicles.js 
  }

    render() {
    	var thedate;
    	if(this.props.from === 'nothing' || this.props.from === undefined){
    	    thedate = this.state.from.slice(1, 11);
    	}
    	else{
    		thedate = this.props.from.slice(1, 11);
    	}

			return(
    		<div id="booking">
    		    <h1>Your booking information</h1>
    			<div id= "container">
                	<div> {this.showVehicleInfo()}</div>
                	<div className ='flex'>
                		<h4>Selected dates:</h4>
                		<p>Pick-up date: {this.props.from}, Drop-off date: {this.props.to}</p>
                	</div>	
                	<div className= 'flex'>
                		<h4>Updated dates:</h4>
                		<p>Pick-up date: {this.state.from}, Drop-off date: {this.state.to}</p>
                	</div>	
                	<CalendarInBooking changeFromB={this.changeFromB} changeToB= {this.changeToB} />
                	<button id="myBtn" type="submit" onClick={() => { this.modalopen() }}>Confirm</button>
					<div id="myModal" className="modal">
				  		<div className="modal-content">
				    	<span className="close" type="submit" onClick={() => { this.modalclose() }}>&times;</span>
				    <h1>Booking confirmed!</h1>
				    <p>You can pick up your booked vehicle at the</p>{thedate}
				    <p>A confirmation email has been sent to you.</p>
				 		</div>
					</div>
				</div>
    		</div>
    		);
    }

  }

  export default Booking;