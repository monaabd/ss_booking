import React, { Component } from 'react';
import '../css/App.css';
import VehicleList from './vehicleList';


class Vehicles extends Component {

  constructor(props){
    super(props);
    this.state = {
      vehicles : []
    };
  this.apiRequest = this.apiRequest.bind(this);
  this.update = this.update.bind(this);
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

        // then make a div to hold the image.
        var image = document.createElement("IMG");
        image.className = 'insideOfCont';
        // set image src to vehicle data
        image.src = data[i].imgLink;
        image.style.width = 200 + 'px';
        image.style.height = 'auto';

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
        button.innerHTML = 'Book';
        button.className = 'insideOfCont';
        

        // -> put textbox and image inside box
        box.appendChild(textbox);
        box.appendChild(image);
        box.appendChild(nameModel);
        box.appendChild(licence);
        box.appendChild(gearBox);
        box.appendChild(price);
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
console.log('vehicles:');
console.log(this.state.vehicles);
}

  render() {
    return (
        <VehicleList apiRequest={this.apiRequest} />
    );
  }

}

export default Vehicles;
