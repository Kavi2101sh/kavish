import React ,{Component} from 'react';
import './App.css';
import axios from 'axios';
export default class Forgotmail extends Component{
	sendMail(e){
		e.preventDefault();
		this.email=this.refs.email.value;
		console.log(this.email)
		axios.post('http://localhost:5000/api/sendforgotmail',{
			email:this.email
		})
		.then((responce)=>{
			console.log(responce);
			alert("check your email");
		})
		.catch("some error");
		}

	
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<form method="post" onSubmit={this.sendMail.bind(this)} className="form-group forms">
						<h3>Enter your email</h3>
						<h5>forgot your password just enter your email.. we'll help you out</h5>
							<div className="input-group">
							<input type="email" ref="email" name="email" className="form-control" required/>
							</div>
							<div className="input-group">
							<button className="btn btn-md">Send email</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			);
	}
}