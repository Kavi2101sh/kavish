import React, { Component } from 'react';
import './App.css';
import Header from "./header";
import Background from "./background";
import Featured from "./featured";

class Home extends Component {
  render(){
    return(
    <div>
      <div className="base">
        <div className="content">
          <Header/>
          <hr/>
          <Background/>
        </div>
      </div>
      <Featured/>

    </div>
 ); }

}
export default Home;
