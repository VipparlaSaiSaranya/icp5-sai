import React from 'react';
import {Component} from "react";
import './index.css'

class CountDownTimer extends Component{
    state = {
        days: 0,
        hours: '00',
        minutes: '00',
        seconds: '00',
        timeUp: false
   }

   
   // Component did mount functions

   componentDidMount() {
    setInterval(() => {
       let eventDate = +new Date(this.props.date);
       let difference = eventDate - +new Date();
 if (difference < 1) {
          this.setState({ timeUp: true });
       } else {
          let days = Math.floor(difference / (1000 * 60 * 60 * 24));
          let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
          let minutes = Math.floor((difference / (1000 * 60)) % 60);
          let seconds = Math.floor((difference / (1000)) % 60);
          this.setState({
             hours: hours > 9 ? hours : `0${hours}`,
             minutes: minutes > 9 ? minutes : `0${minutes}`,
             seconds: seconds > 9 ? seconds : `0${seconds}`,
             days
          });
       }
    }, 1000)
 }


   // output display function
   displayResult = ()=>{
      const {days, hours, minutes, seconds} = this.state;
      const dayString = days > 1 ? 'days' : 'day';
      return(
         <div className="countdowm_timer_container">
            <div className="event_name_container">
               <h1 className="new_year_heading">New Year</h1>
            </div>
            {/* count down timer display  */}
            <div className="countdown_time_container">
               {/* days */}
               <div className="time_container">
                  <h1 className="d_h_m_s">{days}</h1>
                  <p className="d_h_m_s_text">{dayString}</p>
               </div>

               {/* hours */}
               <div className="time_container">
                  <h1 className="d_h_m_s">{hours}</h1>
                  <p className="d_h_m_s_text">Hours</p>
               </div>

               {/* minutes */}
               <div className="time_container">
                  <h1 className="d_h_m_s">{minutes}</h1>
                  <p className="d_h_m_s_text">Minutes</p>
               </div>

               {/* seconds */}
               <div className="time_container">
                  <h1 className="d_h_m_s">{seconds}</h1>
                  <p className="d_h_m_s_text">Seconds</p>
               </div>
            </div>

            {/** event date container */}
            <div className="event_date_container">
               <h1 className="event_date">Event On : January 1st 2023</h1>
            </div>
         </div>
      )
   }

   /* event in progress */
   eventProgress = ()=>{
      return(
         <div className="event_progress_container">
            <h1 className="event_progress_heading"> Event In Progress . . !!</h1>
         </div>
      )
   }


    render(){
        const {timeUp} = this.state;
      
     return (
      <div className="main_container">
         {timeUp ? this.eventProgress() : this.displayResult()}
      </div>
     );
    }
}


export default CountDownTimer