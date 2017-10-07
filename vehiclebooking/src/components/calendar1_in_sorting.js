import React, { Component } from 'react';
import '../css/App.css';



class Calendar1_in_sorting extends Component {
	constructor(props){
    super(props);
    this.state = {
    }
    this.pick = this.pick.bind(this);
  }

  pick(){
    console.log('pick a date')
  }

    render() {
    	return(
        <div>
    		  <h2>Calendar one</h2>
          
          
        </div>

    		);
    } //end render
  } //end component

export default Calendar1_in_sorting;