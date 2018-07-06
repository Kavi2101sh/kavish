import React ,{Component} from 'react';
import './App.css';
import Header from './headerlogin';
import ViewJobsAll from "./viewjobs";
import ViewJobsOngoing from "./ongoingjobs";
import Awards from "./awards";
import Allpurchase from "./viewpurchase"
export default class User extends Component{
	constructor(props){
		super(props);
		this.email=localStorage.getItem('email');
		if(this.email==null){
			this.props.history.push('/login');
		}
	}
	render(){
		return(
			<div>
				<Header/>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
						<ViewJobsAll/>
						</div>
						<div className="col-md-6">
						<ViewJobsOngoing/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6">
							<Awards/>
						</div>
						<div className="col-md-6">
							<Allpurchase/>
						</div>
					</div> 
				</div>
			</div>
			);
	}
}