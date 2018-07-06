import React, { Component } from 'react';
import './App.css';
import Header from "./header";
import {Link} from "react-router-dom";
import Plans from './plans';
import Footer from './footer';
export default class Planspage extends Component{
	render(){
return(
	<div>
	<Header/>
	<div className="forms">
	<Plans/>
	<div className="container">
		<div className="row">
			<div className="col-md-4">
				<center><button className="btn btn-md btn-info">Purchase</button></center>
			</div>
			<div className="col-md-4">
				<center><button className="btn btn-md btn-info">Purchase</button></center>
			</div>
			<div className="col-md-4">
				<center><button className="btn btn-md btn-info">Purchase</button></center>
			</div>
		</div>
	</div>
	</div>
	</div>
	);

	}
}