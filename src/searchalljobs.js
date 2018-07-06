import React, { Component } from 'react';
import './App.css';
import Header from './headerlogin';
import Footer from './footer';
import axios from "axios";
import Featured from './featured';
import Background from './background';
import Proposal from './proposal';
export default class SearchallJobs extends Component{
	constructor(){
		super();
    axios.get('http://localhost:5000/api/getalljobs')
    .then(function(responce){
      var data=JSON.stringify(responce);
      localStorage.setItem('jobs', data);
      
      //window.location.href='/searchalljobs';
    })
    this.jobs=localStorage.getItem('jobs');
    var parsedObject = JSON.parse(this.jobs);
       this.state={
      data:parsedObject
    };
     
     //console.log(this.state.data.data);
}


 

  applyjob(id){
    //e.preventDefault();
    localStorage.removeItem('jobs');
    localStorage.setItem("jobid",id);
    window.location.href='/proposal';
    

  }
	render(){
    this.listItems = this.state.data.data.map((number) =>
  <div className="forms">
  <div className="row">
  <div className="col-md-6">
    <ul className="all-jobs"><li>Title:-{number.title}</li>
    <li>Description:-{number.description}</li>
    <li>Cost:{number.cost} $</li>
    <li>current Status:{number.status}</li>
    <li><button onClick={this.applyjob.bind(this,number._id)} className="btn btn-info">View Details</button></li></ul>
    </div>
    </div>
    </div>
  );    

		return(
				<div>
          <Header/>
          <div className="container">
            
          
      {this.listItems}

          </div>
          <Footer/>
        
      </div>
			);
	}
}