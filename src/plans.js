import React, { Component } from 'react';
import './App.css';
import Header from "./header";
import coin from "./coin.jpg";
import {Link} from "react-router-dom";
export default class Plans extends Component{
	render(){
		return(
				<div className="plan">
					<div className="container">
						<center><h3>PLANS</h3></center>
						<div className="row">
							<div className="col-md-4">
								<div className="plan-cost">
									<h3>Pay</h3>
									<h4>$ 10</h4>
									<h4>Get</h4>
									<h4>100 coins</h4>
								</div>
								<div className="plan-Name">Beginner</div>
							</div>
							<div className="col-md-4">
								<div className="plan-cost">
									<h3>Pay</h3>
									<h4>$ 20</h4>
									<h4>Get</h4>
									<h4>300 coins</h4>
								</div>
								<div className="plan-Name">Intermediate</div>
							</div>
							<div className="col-md-4">
								<div className="plan-cost">
									<h3>Pay</h3>
									<h4>$ 50</h4>
									<h4>Get</h4>
									<h4>1000 coins</h4>
								</div>
								<div className="plan-Name">Premium</div>
							</div>
						</div>
					</div>
				</div>
			);
	}
}