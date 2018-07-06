import React, { Component } from 'react';
import './App.css';
import img from './pj.png'
import Header from './header';
import Footer from './footer';
export default class HowitWorks extends Component{
render(){
	return(
		<div>
		<div>
		<Header/>
		</div>
		<div className="about">
			<div className="container">
				<div className="row">
				<h2>1.Post a Job</h2>
					<div className="col-md-6">
						<img src={img} alt="how it works" className="HowitWorks-img"/>
					</div>
					<div className="col-md-6">
						<ul type="square" className="works-content">
						<li> Tell us what you need.</li>
						<li>Relevant freelancers are notified to submit a proposal.</li>
						<li>Review proposals and select your expert.</li>
						<li>Released on completion.</li>

						</ul>
					</div>
				</div>
				<div className="row">
				<h2>2.Search Freelancers</h2>
					<div className="col-md-6">
						<ul type="square" className="works-content">
						<li> Refine your search by skill, location,category,price etc</li>
						<li>Contact freelancers and request for a Proposal.</li>
						<li>Pay a downpayment(if freelancer asks) to start the job.</li>
						<li>Released on completion.</li>

						</ul>
					</div>
				<div className="col-md-6">
				</div>
				</div>

				<div className="row">
				<h2>3. Manage, Pay & Communicate All in One Place:Your WorkStream.</h2>
				<div className="col-md-6">
				</div>
				<div className="col-md-6">
					<ul type="square" className="works-content">
						<li>All your workstream threads organised by stage and reachable in one click.</li>
						<li>Track all your jobs history in one thread.</li>
						<li>Communicate easily, transact and keep work moving.</li>
					</ul>
				</div>
				
				</div>
					<div className="row">
						<h2>4.Rate the Seller and Keep It Rolling</h2>
						<div className="col-md-6">
							<ul type="square" className="works-content">
							<li> Your workStream keeps it all together.</li>
							<li>Reward people for their hard work with a quick review.</li>
							<li>The seller can send you a follow on proposal or invoice upon completion.</li>
							<li>Quickly re-initiate work with established sellers.</li>

						</ul>
					</div>
				<div className="col-md-6">
				</div>
				</div>
			</div>
		</div>

		<Footer/>
		</div>
		);
}
}

