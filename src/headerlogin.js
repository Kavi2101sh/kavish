import React, { Component } from 'react';
import './App.css';
import Signup from './signup';
import Login from './login';
import logo from './logo-5.png';
import {Link} from 'react-router-dom';

class Header extends Component {
  render(){
    return(
    	<header className="navbar-fixed-top">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-2 col-sm-4">
    					<Link to="/"><img src={logo} height="50px"/></Link>
    				</div>
    				<div className="col-md-10 col-sm-8">
    					<nav>
    						<ul>
                                <li><Link to="/user">Home</Link></li>
                                <li><Link to='/post-a-job'>Post Job</Link></li>
                                <li><Link to="/searchjob">Search Jobs</Link></li>
                                <li><Link to="/viewjobs">View Jobs</Link></li>
    							<li id="login"><Link to="/logout">Logout</Link></li>
    						
    						</ul>
    					</nav>
    				</div>
    			</div>
    		</div>
    	</header>
 ); }

}
export default Header;
//<div className="col-md-7 list">
  //          <ul>
    //            <li><Link href='/post-a-job'>Post Job</a></li>
      //          <li><a href="/searchjob">Search Jobs</a></li>
        //        <li><a href="/viewjobs">View Jobs</a></li>
          //      <li><a href="/viewbods">View Bids</a></li>
            //    <li><a href="/user">Profile</a></li>
                
           // </ul>
        //</div>