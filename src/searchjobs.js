import React, { Component } from 'react';
import './App.css';
import Header from './headerlogin';
import Footer from './footer';
import axios from "axios";
import Featured from './featured';
import Background from './background';
export default class SearchJobs extends Component{
	constructor(){
		super();
	}
	render(){
		return(
				<div className="base">
        <div className="content">
          <Header/>
          <hr/>
          <Background/>
          <hr/>
          <Featured/>
          <Footer/>
        </div>
        
      </div>
			);
	}
}