import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import Facebook from "./facebook";
import Header from './header';
import axios from 'axios';
export default class Signup extends Component {
  checkPassword(){
    this.pass=this.refs.password.value;
    this.conpass=this.refs.conf_password.value;
    if((this.refs.password.value== this.refs.conf_password.value)&& this.refs.password.value.length>6)
    {
      return true;
      }

    else{
      if(this.pass.length<6){
        alert("very weak password");
      }
      else{
        alert("password doesnt match");
      }
      return false;
    }
    }
    isNumber(e){
      if(e.which < 48 || e.which > 57 ){
        e.preventDefault();
      }
    }
  checkVal(e){
    e.preventDefault();
    this.pass=this.refs.password.value;
    this.email=this.refs.email.value;
    this.name=this.refs.firstname.value +" "+ this.refs.lastname.value;
    this.city=this.refs.city.value;
    this.country=this.refs.country.value;
    this.contact=this.refs.contact.value;
    if(this.pass.length<6 && this.name.length<2 && this.city.length<1 && this.country.length<1 && this.contact.length<7){
      alert("fulfil entries");
      return false;
    }
    console.log(this.city);
    axios.post('http://localhost:5000/api/signup', {
    email:this.email,
    password: this.pass,
    name: this.name,
    city: this.city,
    country:this.country,
    contact:this.contact
  })
  .then(function (response) {
    console.log(response);
    alert("You are now registered.. now login");
    window.location.href='/'

  })
  .catch(function (error) {
    alert("kindly reregister with proper credentials");
    console.log(error);
  });

    }
  render(){
    return(
      <div>
      <Header/>
      <div className="container">
    
  <div className="formpage">
    <div className="omb_login">
      <h1 className="omb_authTitle"> Sign Up 
      <p>Already have an account? <Link to="/login">Login</Link></p></h1>
   

    <div className="row omb_row-sm-offset-3">
      <div className="col-xs-12 col-sm-6">  
          <form className="omb_loginForm" onSubmit={this.checkVal.bind(this)} method="post">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <input type="text" ref="firstname" className="form-control" name="firstName" placeholder="First name" required="required" />
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <input type="text" ref="lastname" className="form-control" name="lastName" placeholder="Last name" required="required" />
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <input type="email" ref="email" className="form-control" name="email" placeholder="email address" required="required" />
          </div>
          <span className="help-block"></span>
                    
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
            <input  type="password" ref="password" className="form-control" name="password" placeholder="Password" required="required"/>
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
            <input  type="password" ref="conf_password" className="form-control" name="conf_password" placeholder="Confirm Password" onBlur={this.checkPassword.bind(this)} required/>
          </div>
           <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-map marker"></i></span>
            <input  type="text" ref="city" className="form-control" name="country" placeholder="city" required="required" />
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-map marker"></i></span>
            <input  type="text" ref="country" className="form-control" name="country" placeholder="country" required="required" />
          </div>
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-phone"></i></span>
            <input  type="tel" ref="contact" className="form-control" name="contactno" onKeyPress={this.isNumber.bind(this)} placeholder="contact no." required="required" />
          </div>
          <center><div className="input-group">
            <button className="btn btn-lg btn-primary btn-block"  type="submit">SIGN UP</button>
          </div></center>
        </form>
      </div>
      </div>
       <div className="row omb_row-sm-offset-3 omb_loginOr">
      <div className="col-xs-12 col-sm-6">
        <hr className="omb_hrOr"/>
        <span className="omb_spanOr">or</span>
      </div>
    </div>
     <div className="row omb_row-sm-offset-4 omb_socialButtons">
          <center><Facebook/></center>
          </div>
    </div>
    </div>
    </div>
    </div>);
  }

}


