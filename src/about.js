import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
export default class About extends Component{
render(){
	return(
		<div>
		<Header/>
		<div className="about">
		<h3 className="aboutus-head">What is <span className="prowo">PROWO</span>?</h3>
<p className="aboutus-head-content">We are revolutionaries debunking the archaic 9-to-5 work model. In 2018, our founder Mahima</p> <p className="aboutus-head-content">Kapoor started PROWO using pen, paper and a phone.</p>
<p className="aboutus-head-content">We are using the platform daily to either find freelance work or find the best talent in the world.</p>
<p className="aboutus-head-content">We think we might be onto something.</p>


<h3 className="aboutus-head">What do we <span className="prowo">do</span>?</h3>
<p className="aboutus-head-content">We are a purpose-driven business. Everything we do stems from our desire to</p><p className="aboutus-head-content"> empower people around the world to do what they love and live the dream of being</p> <p className="aboutus-head-content">independent.</p>
<p className="aboutus-head-content">We connect talented experts with savvy businesses that search for the right skills to</p><p className="aboutus-head-content"> get a job done quickly and with no hassle.</p>
<p className="aboutus-head-content">We are in the business of dreams.</p>


<h2 className="about-quote">We are changing the </h2>
<h2  className="about-quote">world</h2>
<h2 className="about-quote prowo">one happy freelancer</h2>
<h2 className="about-quote">at a time.</h2>
</div>
<Footer/>
</div>
		);
}
}