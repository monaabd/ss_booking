import React, {Component} from 'react';
import '../css/App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class CalendarInBooking extends Component {
        constructor(props) {
            super(props)
            this.state = {
                startDateX: moment(),
                endDateX: moment()
            };//end state
            this.handleChangeStartX = this.handleChangeStartX.bind(this);
            this.handleChangeEndX = this.handleChangeEndX.bind(this);
            this.calendaropen = this.calendaropen.bind(this);
            this.calendarclose = this.calendarclose.bind(this);
        }; // end constructor

        // opens the calendar.
        calendaropen() {
            var calendar = document.getElementById('calendars');
            calendar.style.display = "block";
        };// end calenderopen

        // closes the calendar
        calendarclose() {
            var calendar = document.getElementById('calendars');
            calendar.style.display = "none";

            let thedate1 = JSON.stringify(this.state.endDateX._d); // taking moments date object and extracting just the TO date.
            this.props.changeToB(thedate1);

            let thedate2 = JSON.stringify(this.state.startDateX._d); // taking moments date object and extracting just the FROM date.
            this.props.changeFromB(thedate2);
        }; //end calendar close

        // Sets state of the start date - onchange on calendar1
        handleChangeStartX(date) {
            this.setState({
                startDateX: date,
            });
        }; // end handleChangeStartX

        // sets state of the end date - onchange on calendar2
        handleChangeEndX(date) {
            this.setState({
                endDateX: date,
            });
        }; // end handleChangeEndX

  render() {
    return ( 
       <div> 
        <button id="myBtn1" type="submit" onClick={() => { this.calendaropen() }}>Change dates</button>
        <div id="calendars"> 
        <span className="close1" type="submit" onClick={() => { this.calendarclose() }}>  X  </span>
        <div id="calendarBooking">
          <p className="chooseDate">Pick-up date:</p>
          <DatePicker
            todayButton={"Today"}
            dateFormat="YYYY/MM/DD"
            showWeekNumbers
            monthsShown={1}
            minDate={this.state.startDateX}
            selected={this.state.startDateX}
            selectsStart
            startDate={this.state.startDateX}
            endDate={this.state.endDateX}
            onChange={this.handleChangeStartX}
          />
          <p className="chooseDate">Drop-off date:</p>
          <DatePicker 
            todayButton={"Today"}
            dateFormat="YYYY/MM/DD"
            openToDate={moment("2017-10-08")}
            showWeekNumbers
            monthsShown={1} 
            minDate={this.state.startDateX}
            selected={this.state.endDateX}
            selectsEnd
            startDate={this.state.startDateX}
            endDate={this.state.endDateX}
            onChange={this.handleChangeEndX}
          />
        </div> 
        </div> 
      </div> 
    );
  }
}

export default CalendarInBooking;