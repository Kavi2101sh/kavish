import React , {Component} from "react";
import "./App.css";
import Header from './headerlogin';
export default class Logout extends Component{
	constructor(){
		super();
		localStorage.clear();
		window.location.href='/';
	}
}