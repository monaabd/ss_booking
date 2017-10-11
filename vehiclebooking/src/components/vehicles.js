import React, { Component } from 'react';
import '../css/App.css';
import VehicleList from './vehicleList';
import Booking from './booking';


class Vehicles extends Component {

  constructor(props){
    super(props);
    this.state = {
      vehicles : [],
      bookingid: ''
    };

    this.apiRequest = this.apiRequest.bind(this);
    this.update = this.update.bind(this);
    this.booking = this.booking.bind(this);
    this.apiPost = this.apiPost.bind(this);


    this.changeFrom = this.changeFrom.bind(this);
    this.changeTo = this.changeTo.bind(this);
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
    console.log(data[1].brand);

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

        // then make a div to hold the image.
        var image = document.createElement("IMG");
        image.className = 'insideOfCont';
        image.style.borderRadius = '3px';

        // set image src to vehicle data
            if(data[i].imgLink === undefined){
                image.src = 'http://www.imprintables.com/content/images/thumbs/default-image_450.png';
            }
            else{
                image.src = data[i].imgLink;
            }
        image.style.width = 200 + 'px';
        image.style.height = 'auto';

        // box including all car specifications
        var boxUnderCarImage = document.createElement('DIV');
        boxUnderCarImage.id = 'boxUnderCarImage';


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
        var buttonid = data[i]._id;
        button.onclick = function(e){
            _this.booking(e.target.id);  // to acces react state we use _this
        };


        // -> put textbox and image inside box
        //  box.appendChild(textbox);
        box.appendChild(imageBox);
        imageBox.appendChild(image);
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

      apiPost() {

     /* var payload = { 
            from: 1,
            to: 2
      };*/

      var data = new FormData();  
   //   data.append("json", JSON.stringify(payload));

      fetch("/vehicles", { method: 'POST',
                           body: data
                          })
      .then(function(response) {
           return response.json(); 
      }).then(function(data) {
      })                

    }

    update(data){
    this.setState({
    vehicles : [data]
    });
    }

  changeFrom(date) {
    this.setState({
      from: date
    });
  }

  changeTo(date) {
    this.setState({
      to: date
    });
  }

  render() {
        if (this.state.bookingid === ''){  // to filter if list or booking window is shown.
        return (
        <VehicleList changeFrom={this.changeFrom} changeTo={this.changeTo} apiRequest={this.apiRequest} apiPost={this.apiPost} bookingid = {this.state.bookingid}/>
        );
        }
        else if (this.state.booking !== ''){
        return (
        <div>
        <Booking bookingid={this.state.bookingid} from={this.state.from} to={this.state.to}/>
        </div>
        );
        }
  }

}

export default Vehicles;
