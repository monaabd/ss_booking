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
        _this.update(data);

    for (var i = 0; i < data.length; i++) {
        // first make an li element for every car.
        var listitem = document.createElement("LI");
        listitem.id = data[i]._id;

        // then make a div to hold the data
        var box = document.createElement("DIV");
        box.id = 'vehicleslistbox';
        //->  put box inside li
        listitem.appendChild(box);

        // then make a div to hold the text.
        var textbox = document.createElement("p");

        // then make a div to hold the image.
        var image = document.createElement("IMG");
        // set image src to vehicle data
        image.src = data[i].imgLink;
        image.style.height = 50 + 'px';

        // then make a button to go to booking.
        var button = document.createElement("button");
        button.innerHTML = 'Book';

        // -> put textbox and image inside box
        box.appendChild(textbox);
        box.appendChild(image);
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
