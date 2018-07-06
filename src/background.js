import React, { Component } from 'react';
import './App.css'; 
class Background extends Component {
  render(){
    return(
    <div className="background">
    	<div className="search">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-3 ">
                    <div className="fields">
    					<input  type="text" name="skills" placeholder="Skills"/>
    				</div>
                    </div>
    				<div className="col-md-3 ">
                    <div className="fields">
    					<input type="text" name="location" placeholder="Location"/>
    				</div>
                    </div>
    				<div className="col-md-3">
    					<select value="all" className="fields">
                            <option defaultValue="all">All Category</option>
    						<option value="web development">Web</option>
    						<option value="software development and testing">Software Development & Testing</option>
    						<option value="Business Support">Business Support</option>
    						<option value="Writing and translation">Writing & Translation</option>
    						<option value="Marketing and Social Media">Marketing & Social Media</option>
    						<option value="Designing">Design</option>
    					</select>
    				</div>
    				<div className="col-md-3">
    					<button className="btn btn-md fields">Search Jobs</button>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
 ); }

}
export default Background;
