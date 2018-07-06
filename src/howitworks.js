import React, {Component} from 'react';
import img from './coverlappy.png';
import {Link} from 'react-router-dom';
export default class HowitWorks extends Component{
	render(){
		return(
			<div className="How_it_works">
			<div className="container">
				<div className="howitworks-content">
					<h3><center>HOW IT WORKS</center></h3>
						<p>We have got some exciting fuctionalities for you.</p><p> Here you can Post Jobs in accordance with the categories defined. </p><p>Lets have a look at this.
						&nbsp;<Link to="/howitworks">See More</Link></p>
				</div>
			</div>
			<div className="howitworks">
			<img src={img} alt="HowitWorks"/>
			</div>
			</div>
			
			);
	}
}