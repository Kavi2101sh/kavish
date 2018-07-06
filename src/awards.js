import React , {Component} from "react";
import "./App.css";
export default class Awards extends Component{
	render(){
		return(
			<div className="forms">
				<div className="row">
				<p>This will show all the awards that has been granted to a user by the client.</p>
					<button className="btn btn-md btn-info">View Awards</button>
				</div>
				<div className="row">
					<h3><center>AWARDS</center></h3>
				</div>
			</div>
			);
	}
}