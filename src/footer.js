import React, { Component } from 'react';
import './App.css';
import logo from './logo-5.png';
export default class Footer extends Component{
render(){
	return(
		<footer>
		<div className="container">
			<div className="row">
				<div className="col-md-offset-4 col-md-4">
					<center>
					<img src={logo} alt="logo-footer"/>
					<p>PROWO gives your business access to thousands of </p>
					<p>trusted freelancers who can work flexibly from anywhere.</p>
					<p className="imp">© 2018 PROWO LTD</p>
					</center>
				</div>
			</div>
		</div>

		</footer>
		);
}
}
