import React , {Component} from "react";
import "./App.css";
export default class Allpurchase extends Component{
	render(){
		return(
			<div className="forms">
				<div className="row">
				<p>This will show all the purchase of coins that has been purchased by the user</p>
					<button className="btn btn-md btn-info">View Purchase</button>
				</div>
				<div className="row">
					<h3><center>PURCHASE</center></h3>
				</div>
			</div>
			);
	}
}