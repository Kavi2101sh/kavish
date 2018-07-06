import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import {withAlert} from 'react-alert';
import  { Redirect } from 'react-router-dom';
import Header from './header';
class Login extends Component {
  constructor(props){
    super(props);
    if(localStorage.getItem('email')!=null){
      window.location.href='/user';
    }
    this.state={
      redirect:false
    }
    console.log(this.state.redirect);
   this.getVal=this.getVal.bind(this)
    //this.checkValid=this.checkValid.bind(this);

}
  getVal(e){
    e.preventDefault();
    this.email=this.refs.email.value;

    this.password=this.refs.password.value;
    axios.post('http://localhost:5000/api/login', {
    email:this.email,
    password: this.password
    })
    .then(function (response) {
     var data=JSON.stringify(response);
     localStorage.setItem('id',response.data[0].data._id);
     localStorage.setItem('email',response.data[0].data.email);
     let mail= localStorage.getItem('email');
     if(mail!=null){
      window.location.href="/user";
     }
      })
    .catch(function (error) {
      alert("user not exist");
    });
  }
  callForNew(){
    let all=alert("probably a new user");
    return all;
  }
  render(){
    
    this.state.redirect? this.props.history.push('/'):null;
      const responseFacebook = (response) => {

        }

      const componentClicked = (response) =>{
     
      }
  	return(
      <div>
      <Header/>
      <div className="container">
        <div className="formpage">
          <div className="omb_login">
            <h1 className="omb_authTitle"> Login 
            <p>Don't have an Account? <Link to="signup">Sign Up</Link></p></h1>
         

          <div className="row omb_row-sm-offset-3">
            <div className="col-xs-12 col-sm-6">  
                <form className="omb_loginForm" onSubmit={this.getVal.bind(this)} method="GET">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-user"></i></span>
                  <input type="email" ref= "email" className="form-control" name="email" placeholder="Email Address" required/>
                </div>
                <span className="help-block"></span>
                          
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                  <input  type="password"  ref="password" className="form-control" name="password" placeholder="Password" required/>
                </div>
               <div className="col-md-6">

                <span><input type="checkbox" name="vehicle" value="Bike" id="inputcheck"/>
                </span><span>Remember Me</span>

               </div>
            <div className="col-md-6 col-sm-3">
              <p className="omb_forgotPwd">
                <Link to="/forgotmail">Forgot password?</Link>
              </p>
            </div>
              <button className="btn btn-lg btn-primary btn-block">LOGIN</button>
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
                <div className="col-xs-12 col-lg-12">
                  <center>
                    <FacebookLogin
                          appId="1966909883525665"
                          autoLoad={true}
                          fields="name,email,picture"
                          onClick={componentClicked}
                          callback={responseFacebook} />
                      </center>
                    <i className="fa fa-facebook visible-xs"></i>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
  );
  }

}
export default Login;





