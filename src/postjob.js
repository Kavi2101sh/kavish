import React, { Component } from 'react';
import './postjob.css';
import Header from './headerlogin';
import axios from "axios";
export default class Postjob extends Component{
  constructor(props){
    super(props);
    localStorage.getItem('email')? null:this.props.history.push('/login');
  }
   isNumber(e){
      if(e.which < 48 || e.which > 57 ){
        e.preventDefault();
      }
    }
  setVal(e){
    e.preventDefault();
    this.category=this.refs.category.value;
    this.title=this.refs.title.value;
    this.description=this.refs.description.value;
    this.price=this.refs.price.value;
    this.time=this.refs.time.value;
    this.deadline=this.refs.deadline.value;
    this.mail= localStorage.getItem('email');
    console.log(this.file);
    axios.post('http://localhost:5000/api/postjob', {
    email:this.mail,
    title:this.title,
    description:this.description,
    price:this.price,
    time:this.time,
    deadline:this.deadline,
    cname:this.cname,
    
    contact:this.contact,
    category:this.category
    })
    .then(function (response) {
     console.log(response);
     alert("your job has been uploaded");
     window.location.href='/user';

  })
    .catch(function (error) {
      alert("sorry job hasnt been uploaded yet, kindly re-enter");
      
    });
  }

  render(){
    return(
      <div>
  <Header/>
<div className="container">
	<form method="post" encType="multipart/form-data">
    <div className="form-group about abc">
      <label>Job Category: </label>
        <select ref="category">
               <option defaultValue="all">All category</option>
                <option value="Web">Web</option>
                <option value="software development and testing">software development and testing</option>
                <option value="Business Support">Business Support</option>
                <option value="Writing and Translation">Writing and Translation</option>
                <option value="Marketing and Social Media">Marketing and Social Media</option>
                <option value="Design">Design</option>
              </select>
    
    </div>
    <div className="form-group abc">
      <label>Job Title</label>
      <input type="text" ref="title" className="form-control" id="pwd" placeholder="" name="pwd"/>
    </div>
    <div className="form-group  abc">
      <label>Job Description</label>
      <textarea className="form-control" ref="description" id="pwd" row-="5" placeholder="" name="pwd"></textarea>
    </div>
    <div className="form-group  def">
      <label>Job Price</label>
      <div className="input-group">
      <span className="input-group-addon">Fix</span>
      <input id="msg" type="text" onKeyPress={this.isNumber.bind(this)} ref="price" className="form-control" name="msg" placeholder="in dollars.."/>
    </div>
    </div>
    <div className="form-group  abc">
      <label>Job Duration</label>
      <input type="text" className="form-control" onKeyPress={this.isNumber.bind(this)} ref="time" id="pwd" placeholder="Time in Days" name="pwd"/>
    </div>
    <div className="form-group  abc">
      <label>Job Deadline</label>
      <input type="date" className="form-control" ref="deadline" id="pwd" placeholder="" name="pwd"/>
    </div>
    
    
    <button className="btn btn-success post" onClick={this.setVal.bind(this)}>POST JOB</button>
  </form>
</div>
</div>
);
}
}

