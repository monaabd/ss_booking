import React, { Component } from 'react';
import './App.css';


class Carlist extends Component {
  constructor(props){
     super(props);
      this.state={
      carsInfo:'  let us see the cars.'
      };
   this.showCar = this.showCar.bind(this);
  }
    
    showCar(event){
       let ajax = new XMLHttpRequest();
        let url = 'http://localhost:4000/vehicles';

        console.log(url,"url");
        ajax.open('get',url);
        ajax.onreadystatechange = (function() {
          if(ajax.status === 200 && ajax.readyState === 4)
          { 
              console.log('if it works')
        }   
          })
        ajax.send();
    } //ajax
    
  render() {
    return (
        <div>
          {this.state.carsInfo} 
        </div>
      
    );
  }
    
}

export default Carlist;