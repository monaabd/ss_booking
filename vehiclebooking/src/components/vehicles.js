import React, { Component } from 'react';
import '../css/App.css';


class Vehicles extends Component {
  constructor(props){
    super(props);
  this.apiRequest = this.apiRequest.bind(this);

  }


  // API //

  

  apiRequest(){
      var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
      //var url = 'localhost:4000/vehicles';

      var url = '127.0.0.1:4000/vehicles';
      var x = new XMLHttpRequest();
      x.open('GET', url, true);

      x.onreadystatechange = function() {

                if (/^POST/i.test('GET')) {
                    x.setRequestHeader('Accept','application/json; charset=utf-8');
                }
                if (x.status == 200 && x.readyState == 4) {
                //parse string to object
                //let json = JSON.parse(x.responseText);
                console.log('good');
                console.log(x);

                } else if (x.status != 200) {
                // AJAX failiure report
                console.log('ajax error');
                }

            }; //end ajax
            x.send();
};


  render() {
    return (
      <div>
        <h1>Vehicles view</h1>
        <button onClick={this.apiRequest}>Click to request db from API</button>
      </div>
    );
  }

}

export default Vehicles;