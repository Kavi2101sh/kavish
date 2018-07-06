import React, { Component } from 'react';
import  './App.css'
import Postjob from './postjob';
import Header from './header';
import axios from 'axios';
export default class Proposal extends Component{
  constructor(props){
    super(props);
    this.state={
      job:null
    }
    let self=this;
    this.project_id= localStorage.getItem('jobid');
     axios.post('http://localhost:5000/api/getjobid',{
      id:this.project_id
     })
    .then(function(responce){
      
      
     self.result=responce.data;
    
      self.setState({job:self.result});
      
      //window.location.href='/searchalljobs';
    })

      
  }
  isNumber(e){
      if(e.which < 48 || e.which > 57 ){
        e.preventDefault();
      }
    }
  getProposal(e){
    e.preventDefault();
    this.price = this.refs.price.value;
    
    this.duration= this.refs.duration.value;
    this.proposal= this.refs.proposal.value;
    this.userid= localStorage.getItem('email');
    axios.post('http://localhost:5000/api/proposal', {
      price:this.price,
      project_id:this.project_id,
      duration:this.duration,
      proposal:this.proposal,
      user_id:this.userid
    })
    .then((responce)=>{
      console.log(responce);
      alert("your proposal has been received");
      window.location.href="/user";
      })
    .catch((err)=>{
          console.log(err)
        }
          );
    


  }
  componentWillUnmount(){
    localStorage.removeItem("jobid");
  }
  render(){
    let self=this;
    if(this.state.job!= null){
    console.log(this.state.job);
    return(
    	<div>
    	<div>
    	</div>
    	<div className="container">
      <Header/>
    	<div className="row">
    	<div className="col-lg-6">
    	<div className="forms">
	<form method="post">
    <div className="form-group abc">
      <label>Project Category</label>
     <select value="" disabled>
               <option defaultValue="all">All category</option>
                <option value="web development">Web</option>
                <option value="software development and testing">software development and testing</option>
                <option value="Business Support">Business Support</option>
                <option value="Writing and translation">Writing and Translation</option>
                <option value="Marketing and Social Media">Marketing and Social Media</option>
                <option value="Designing">Design</option>
              </select>
    </div>
    <div className="form-group abc">
      <label>Project Title</label>
      <input type="text" className="form-control" value={this.state.job['title']}   id="pwd" placeholder="" name="pwd" disabled/>
    </div>
    <div className="form-group  abc">
      <label>Project Description</label>
      <textarea className="form-control" id="pwd" row="5" value={this.state.job['description']} placeholder="" name="pwd" disabled></textarea>
    </div>
    <div className="form-group  def">
      <label>Project Price</label>
      <div className="input-group">
      <span className="input-group-addon">Fix</span>
      <input id="msg" type="text" className="form-control" value={this.state.job['cost']} name="msg" placeholder="in $" disabled/>
    </div>
    </div>
    <div className="form-group  abc">
      <label>Project Duration</label>
      <input type="text" className="form-control" id="pwd" value={this.state.job['duration']}  placeholder="" name="pwd" disabled/>
    </div>
    <div className="form-group  abc">
      <label>Project Deadline</label>
      <input type="text" className="form-control" id="pwd" value={this.state.job['deadline']}  placeholder="" name="pwd" disabled/>
    </div>
    
  </form>
  </div>
  </div>

  <div className="col-lg-6">
  <div className="forms">
  <div className="proposal">
  <h3>Do you have something in mind?? share your Idea</h3></div>
  	<form  onSubmit={this.getProposal.bind(this)} method="post">
  		<label>Proposal</label>
  		<div>
  		<textarea rows="10" cols="40" ref="proposal" className="form-control" required></textarea>
  		</div>
  		<div>
  		<label>Price:</label>
  		<input type="text" name="price" className="form-control" onKeyPress={this.isNumber.bind(this)} ref="price" placeholder="price in $" required/>
  		</div>
  		<div>
  		<label>Duration:</label>
  		<input type="text" name="duration" className="form-control" onKeyPress={this.isNumber.bind(this)} ref="duration" placeholder="time in Days" required/>
  		</div>
      <div>
  		<button className="btn btn-md btn-success">Submit your proposal</button>
  	   </div>
    </form>
  	
  </div>
  </div>
  </div>  
</div></div>
    	);}
      else{
        return(<div>Hello</div>);
      }
}
}
