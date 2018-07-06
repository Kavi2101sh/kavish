import React ,{Component} from "react";
import './App.css';
import axios from 'axios';
export default class ViewJobsOngoing extends Component{
	constructor(){
		super();
	}
	getalljobs(e){
		e.preventDefault();
		this.id=localStorage.getItem('id');
		console.log(this.id);
		axios.post('http://localhost:5000/api/getallongoingjobs',{
			user_id: this.id
		})
		.then(function(responce){
			var data=JSON.stringify(responce);
			localStorage.setItem('ongoingjobs', data);
			
			window.location.href='/searchallongoingjobs';
		})
	}
	render(){

		return(
			<div className="forms">
			<div className="row">
					<div className="col-md-6 forms" >
						job1
					</div>
					<div className="col-md-6 forms">
						job2
					</div>
					<div className="col-md-6 forms">
						job3
					</div>
					<div className="col-md-6 forms">
						job4
					</div>
				</div>
				<div className="row">
					<button onClick={this.getalljobs.bind(this)} className="btn btn-md btn-info">Show Ongoing Jobs</button>
				</div>
				<div className="row">
					<h3><center>Ongoing Projects</center></h3>
				</div>
			</div>
			);
	}
}