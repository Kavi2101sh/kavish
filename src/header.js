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
    				<div className="col-md-3 col-sm-4">
    					<Link to="/"><img src={logo} height="50px"/></Link>
    				</div>
    				<div className="col-md-9 col-sm-8">
    					<nav>
    						<ul>
    							<li><Link to="/about">About Us</Link></li>
    							<li> <Link to="/howitworks">How It Works</Link></li>
    							<li id="login"><Link to="/login"><button className="btn btn-info">LOGIN</button></Link></li>
                                <li id="login"><Link to="/signup"><button className="btn btn-info">SIGNUP</button></Link></li>
    						
    						</ul>
    					</nav>
    				</div>
    			</div>
    		</div>
    	</header>
 ); }

}
export default Header;
