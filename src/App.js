import React, { Component } from 'react';
import './App.css';
import Header from "./header";
import Background from "./background";
import Featured from "./featured";
import Plans from "./plans";
import Login from './login';
import Footer from "./footer";
import HowitWorks from './howitworks'; 
class App extends Component {
  render(){
    return(
    <div>
      <div className="base">
        <div className="content">
          <Header/>
          <hr/>
         
        </div>
      </div>
      <div>
      <Featured/>
      <HowitWorks/>
      
      <Login/>
      <Footer/>
      </div>
    </div>
 ); }

}
export default App;
