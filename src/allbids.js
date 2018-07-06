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
    this.id=localStorage.getItem('bidid');
    axios.post('http://localhost:5000/api/getallbids',{
      project_id:this.id
    })
    .then(function(responce){
      var data=JSON.stringify(responce);
      localStorage.setItem('bids', data);
      
      //window.location.href='/searchalljobs';
    })
    this.proposals=localStorage.getItem('bids');
    var parsedObject = JSON.parse(this.proposals);
       this.state={
      data:parsedObject
    };
     
     console.log(this.state.data.data);
}


 

  acceptproposal(id){
    //e.preventDefault();
    localStorage.removeItem('bids');
    
    window.location.href='/proposal';
    

  }
	render(){
    this.listItems = this.state.data.data.map((number) =>
  <div className="forms">
  <div className="row">
  <div className="col-md-6">
  <ul>
    <li>Description:-{number.description}</li>
    <li>Cost:{number.cost} $</li>
    <li>current Status:{number.duration}</li>
    <li><button onClick={this.acceptproposal.bind(this,number._id)} className="btn btn-info">Accept</button></li></ul>
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