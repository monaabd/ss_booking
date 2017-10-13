import React, {Component} from 'react';
import '../css/App.css';
import moment from 'moment';
import CalendarInBooking from './calendar_in_booking';

var nogood; // global variable to hold an ID to use with the fetch-put.

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(), 	// moment object
            endDate: moment(),		// moment object
            car: '',
            from: 'nothing',
            to: 'nothing',
            showCalendar: 'none',
            vehicles: []
        }; //end STATE.
        this.showVehicleInfo = this.showVehicleInfo.bind(this);
        this.bookedCar = this.showVehicleInfo.bind(this);
        this.apiBook = this.apiBook.bind(this);
        this.modalopen = this.modalopen.bind(this);
        this.modalclose = this.modalclose.bind(this);
        this.changeFromB = this.changeFromB.bind(this);
        this.changeToB = this.changeToB.bind(this);
    };//end constructor.


    //calls the GET, from DB to display vehicle info.
    showVehicleInfo() {
        var theinfo = document.getElementById('information');
        //test to see if the div that hold the car info has content yet, or not.
        if (theinfo == null) { //if there is no content; add some.
            nogood = this.props.bookingid; // here we set the ID of the car to be what the customer chose in the list.
            
            //START of api call.
            fetch('/vehicles')
                .then(function(response) {
                    return response.json();
                }).then(function(data) {
                	// we loop through all the entries in the DB that is connected to the route '/vehicles' in the controller.
                    for (var i = 0; i < data.length; i++) {
                    	//test to find the vehicle that the customer chose in the list, we here use the ID that we have as a global variable.
                        if (nogood === data[i]._id) {

                        	// BELOW dynamically added content:

                            // a div with the selected car image as background.
                            var imageBox = document.createElement('DIV');
                            imageBox.id = 'imageBox';
                            imageBox.style.width = '200px';
                            imageBox.style.height = '150px';
                            imageBox.style.border = 'solid 5px darkgray';
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

                            // Where to put all the dynamic elements.
                            let renderElements = document.getElementById("renderElements");

                            // append all our created elements on selectedCarInfo
                            selectedCarInfo.appendChild(carBrand_Model);
                            selectedCarInfo.appendChild(licence);
                            selectedCarInfo.appendChild(gearBox);
                            selectedCarInfo.appendChild(price);
                            renderElements.insertBefore(selectedCarInfo, renderElements.firstChild);
                            renderElements.insertBefore(imageBox, renderElements.firstChild);
                        } //end if
                    } // end for loop
                }) // end get
        } //end if div is empty
    } // end showvehicleinfo

    // this is the booking confirmation pop up. OPEN
    modalopen() {
    	// we test to see which calendar the dates are coming from and if there even are any.
    	// a popup will remind the user to fill in a date before confirming.
        if (this.state.from === 'nothing' && this.props.from === undefined) {
            alert('Please choose date booking');
        } else if (this.state.from !== 'nothing' && this.props.from === undefined) {
            alert('Please choose date calendar');
        } else {
            var modal = document.getElementById('myModal');
            modal.style.display = "block"; //only show confrimation if dates exist.
        } //end modal open


    }
    // this is the booking confirmation pop up. CLOSE.
    modalclose() {
        var modal = document.getElementById('myModal');
        modal.style.display = "none"; // hide modal when x is clicked.
        window.location.reload(); //will also reload the page so booking screen is left on completion.
        this.apiBook(); // send new dates to DB when the deal is done.
    } //end modal close

    //calls the PUT, from DB to send updated dates to vehicle object.
    apiBook() {
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
        fetch("/vehicles/book/" + theid, {
            method: "PUT",
            body: stringDates,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function(response) {});
    } // end apiBook

    // enters all the vehicles into the state.
    update(data) {
        this.setState({
            vehicles: [data]
        });
    }

    // sets FROM date from calendar for this component and for the Vehicle component also.
    changeFromB(date) { // B for booking
        this.setState({
            from: date
        });
        this.props.changeFromV(date); // V for vehicles.
    }

    // sets TO date from calendar for this component and for the Vehicle component also.
    changeToB(date) { // B for booking 
        this.setState({
            to: date
        });
        this.props.changeToV(date); // V for vehicles.
    }

    render() {
        var thedate; // temp variable to hold state to compare it with.
        // testing if the date is in the props or the state in this component ( sorting or booking calendar)
        if (this.props.from === 'nothing' || this.props.from === undefined) {
            thedate = this.state.from.slice(1, 11);
        } else {
            thedate = this.props.from.slice(1, 11);
        }

       return(
    		<div id="booking">
                <h1 style={{borderBottom: '1px solid black'}}>Your booking information</h1>
                <div id="information">{this.showVehicleInfo()}</div>
                <div className="container" id='renderElements'>
                	<div className= 'flex'>
                		<h4>Selected dates:</h4>
                		<p className='style'>Pick-up date:</p> 
                		<p className='dates'>{this.props.from}</p>
                		<p className='style'>Drop-off date:</p>
                		<p className='dates'>{this.props.to}</p>
                	</div>
                	<div className= 'flex'>	
                		<h4>Updated dates:</h4>
                		<p className='style'>Pick-up date:</p>
                		<p className= 'dates'>{this.state.from}</p> 
                		<p className='style'> Drop-off date:</p> 
                		<p className= 'dates'>{this.state.to}</p>
                	</div>	
                </div>
                <div className= 'container2'>
                	<div className= 'flex2'>
                		<CalendarInBooking changeFromB={this.changeFromB} changeToB= {this.changeToB} />
                	</div>
                	<div className= 'flex2'>
                		<button id="myBtn" type="submit" onClick={() => {this.modalopen()}}>Confirm</button>
						<div id="myModal" className="modal">
				  			<div className="modal-content">
				    			<span className="close" type="submit" onClick={() => {this.modalclose()}}> X </span>
				    			<h1>Booking confirmed!</h1>
				    			<p>You can pick up your booked vehicle at the</p>{thedate}
				    			<p>A confirmation email has been sent to you.</p>
				  			</div>
						</div>
					</div>
				</div>
    		</div>
    		); 
    }; // end render
  };

  export default Booking;