import React , {Component} from "react";
import "./App.css";
import Header from './headerlogin';
export default class Forgotpass extends Component{
	constructor(){
		super()
	}
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
	render(){
		return(
			<div>
			<Header/>
			<div className="forms">
				<center><h2>Create your new password</h2></center>
				<form>
					<div className="container">
						<div className="row">
							<div className="col-md-offset-4 col-md-4">
								<label>Create New Password</label>
								<input type="password" ref="password" className="form-control" required/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-offset-4 col-md-4">
								<label>Confirm New Password</label>
									<input type="password" ref="conf_password" className="form-control" required/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-offset-4 col-md-4">
						<button className="btn btn-md btn-info">change password</button>
							</div>
						</div>
					</div>

				</form>
			</div>
			</div>
			);
	}
}