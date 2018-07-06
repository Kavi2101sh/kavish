import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import  { Redirect } from 'react-router-dom';
import Signup from './signup';
class Login extends Component {
  constructor(props){
    super(props);
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
    axios.post('http://localhost:5000/login', {
    email:this.email,
    password: this.password
    })
    .then(function (response) {
     let mail=response.data[0].data.email;
     this.props.history.push('/signup');
     if(mail!=null){
      console.log("hello");
      
      //this.componentWillUnmount();
     }
      })
    .catch(function (error) {
    });
  }
  componentWillUnmount(){
    console.log("hello");
    // this.setState({
    //   redirect:true
    // }, function(){
    //   console.log(this.state.redirect);
    //   if(this.state.redirect==true){
    //     this.props.history.push('/signup');
    //   }
    // });
  }
  render(){
      const responseFacebook = (response) => {

        }

      const componentClicked = (response) =>{
     
      }
  	return(

      <div className="container">
        <div className="formpage">
          <div className="omb_login">
            <h1 className="omb_authTitle"> Login 
            <p>Don't have an Account? <Link to="signup">Sign Up</Link></p></h1>
         

          <div className="row omb_row-sm-offset-3">
            <div className="col-xs-12 col-sm-6">  
                <form className="omb_loginForm" action="" method="GET">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-user"></i></span>
                  <input type="email" ref= "email" className="form-control" name="email" placeholder="email address"/>
                </div>
                <span className="help-block"></span>
                          
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                  <input  type="password"  ref="password" className="form-control" name="password" placeholder="Password"/>
                </div>
                <div className="col-md-6 col-sm-3">
              <label className="checkbox">
                <input type="checkbox" value="remember-me"/>Remember Me
              </label>
            </div>
            <div className="col-md-6 col-sm-3">
              <p className="omb_forgotPwd">
                <Link to="#">Forgot password?</Link>
              </p>
            </div>
              <button className="btn btn-lg btn-primary btn-block" onClick={this.getVal.bind(this)} type="submit">Login</button>
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
  );
  }

}
export default Login;





