import {Component} from "react";
import CountDownTimer from "./Component/CountdownTimer/index";
import React from "react";

import './App.css';

class App extends Component{

  render(){
    return(
      <div className="app_container">
        <CountDownTimer date="01/01/2022"/>
      </div>
    )
  }
}

export default App;
