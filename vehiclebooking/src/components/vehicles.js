import React, { Component } from 'react';
import '../css/App.css';
import VehicleList from './vehicleList';
import Booking from './booking';


class Vehicles extends Component {

    constructor(props){
        super(props);
        this.state = {
            vehicles : [],
            bookingid: '',
            test: false
        };

    this.apiRequest = this.apiRequest.bind(this);
    this.update = this.update.bind(this);
    this.booking = this.booking.bind(this);
    this.changeFrom = this.changeFrom.bind(this);
    this.changeTo = this.changeTo.bind(this);
    this.fireChangeFromAndTo = this.fireChangeFromAndTo.bind(this);
  }

    booking(x){
        this.setState({
            bookingid: x
        });
    }

apiRequest(){

        const _this = this;
        fetch('/vehicles')
        .then(function(response) {
            return response.json();
        }).then(function(data) {
        // I made the data load when we open the page and this line makes it load non-stop    
        //    _this.update(data);
 

        for (var i = 0; i < data.length; i++) {

            // first make an li element for every car.
            var listitem = document.createElement("LI");
            listitem.id = data[i]._id;
            listitem.className = 'vehicleBox';

            // then make a div to hold the data
            var box = document.createElement("DIV");
            box.id = 'vehicleslistbox';
            box.className = 'individualContainer';
            //->  put box inside li
            listitem.appendChild(box);

            // then make a div to hold the text.
            var textbox = document.createElement("p");
            textbox.className = 'insideOfCont';


            var imageBox = document.createElement('DIV');
            imageBox.id = 'imageBox';
            imageBox.style.width = '200px';
            imageBox.style.height = '150px'; 
            imageBox.style.border = 'dotted 1px gray';
            imageBox.style.borderRadius = '2px';
            imageBox.style.textAlign = 'center';
            var urlString = 'url(' + data[i].imgLink + ')';
            imageBox.style.backgroundImage = urlString; 
            imageBox.style.backgroundSize = "cover";
   
            // set image src to vehicle data
            //f(data[i].imgLink === '../media/car.jpg'){
             //   image.src = 'http://www.imprintables.com/content/images/thumbs/default-image_450.png';
            //}
            //else{
            //    image.src = data[i].imgLink;
            //}
           

            // box including all car specifications
            var boxUnderCarImage = document.createElement('DIV');
            boxUnderCarImage.className = 'boxUnderCarImage';


            // then make a div with car name and model
            var nameModel = document.createElement('DIV');
            nameModel.className = 'insideOfCont';
            nameModel.innerHTML = data[i].brand + ', ' + data[i].model;

            // then make a div with driving licence
            var licence = document.createElement('DIV');
            licence.className = 'insideOfCont';
            licence.innerHTML = 'Driving licence: ' + data[i].requiredDrivingLicense;

             // then make a div with gear box
            var gearBox = document.createElement('DIV');
            gearBox.className = 'insideOfCont';
            gearBox.innerHTML = 'Gear box: ' + data[i].gearbox;

             // then make a div with price/day
            var price = document.createElement('DIV');
            price.className = 'insideOfCont';
            price.innerHTML = 'Price/day: ' + data[i].dagshyra;

            // then make a button to go to booking.
            var button = document.createElement("button");
            button.innerHTML = 'Book now';
            button.id = data[i]._id;
            button.className = 'insideOfCont';
            button.onclick = function(e){
                _this.booking(e.target.id);  // to acces react state we use _this
            };


            // -> put textbox and image inside box
            //  box.appendChild(textbox);
            box.appendChild(imageBox);
            box.appendChild(boxUnderCarImage);
            boxUnderCarImage.appendChild(nameModel);
            boxUnderCarImage.appendChild(licence);
            boxUnderCarImage.appendChild(gearBox);
            boxUnderCarImage.appendChild(price);
            box.appendChild(button);

            // then make a text string to display in the textbox.
            var textnode = document.createTextNode(' id: ' + data[i]._id );
            // -> put text inside the textbox
            textbox.appendChild(textnode);

            document.getElementById("vehicles").appendChild(listitem);
        } //end for loop
        }) //end data function
    } // end apiRequest


    update(data){
        this.setState({
            vehicles : [data]
        });
    }

    fireChangeFromAndTo() {
        if(this.changeTo) {
            console.log('Change To is running');
        }
    }

  changeFrom(date) {
    //console.log('Fire changeFrom n vehicles.js');
    let slicedDateFrom = date.slice(0, 11);
    console.log('From: ' + slicedDateFrom.length);

        this.setState({
                from: slicedDateFrom,
                test: true
        });
  }// end of changeFrom

  changeTo(date) {
   // console.log('Fire changeTo in vehicles.js');

    let slicedDateTo = date.slice(0, 11);
    console.log('To: ' + slicedDateTo.length);


    if(slicedDateTo.length === 11 && this.state.test !== true) {
        console.log('if running');
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = dd + '/' + mm + '/' + yyyy;
        console.log('Today function ' + today); 

        this.setState({
            to: slicedDateTo,
            from: today,
            test: true
           
        });

        
    }else {
        this.setState({
            to: slicedDateTo           
        });
    }
    
  }// end of change to



  render() {
        if (this.state.bookingid === ''){  // to filter if list or booking window is shown.
        return (
        <VehicleList changeFrom={this.changeFrom} changeTo={this.changeTo} apiRequest={this.apiRequest} apiPost={this.apiPost} bookingid = {this.state.bookingid}/>
        );
        }
        else if (this.state.booking !== ''){
        return (
        <div>
        <Booking bookingid={this.state.bookingid} from={this.state.from} to={this.state.to} changeFromV={this.changeFrom} changeToV={this.changeTo} />
        </div>
        );
        }
  }

}

export default Vehicles;
