import React ,{Component} from 'react';
import './App.css';
import axios from 'axios';
export default class ViewJobs extends Component{
	constructor(props){
		super(props);
	}
	getalljobs(e){
		e.preventDefault()
		axios.get('http://localhost:5000/api/getalljobs')
		.then(function(responce){
			var data=JSON.stringify(responce);
			localStorage.setItem('jobs', data);
			
			window.location.href='/searchalljobs';
		})
	}
	render(){
		return(
			<div className="forms">
				<div className="row">
					<div className="col-md-6 forms">
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
					<button onClick={this.getalljobs.bind(this)} className="btn btn-md btn-info">Show Jobs</button>
				</div>
				<div className="row">
					<h3><center>JOBS</center></h3>
				</div>
			</div>
			);
	}
}