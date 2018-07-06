import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserHistory, BrowserRouter} from 'react-router-dom';
import Login from './login';
import Home from './home';
import Signup from './signup';
import App from './App';
import Postjob from './postjob';
import HowitWorks from './howitworkspage';
import Admin from './admin';
import Proposal from './proposal';
import registerServiceWorker from './registerServiceWorker';
import Planspage from './planspage';
import Users from './user';
import Forgotmail from './forgotmail';
import Forgotpass from './forgotpass';
import Exampleapp from './test';
import SearchJobs from './searchjobs';
import Logout from './logout';
import SearchallJobs from './searchalljobs';
import About from './about';
import Ongoingalljobs from "./ongoingalljobs";
import Allbids from "./allbids";
// const app=document.getElementById('root');
ReactDOM.render(
	<BrowserRouter>
	<div>

	<Route exact path='/login' component={Login}/>
	<Route exact path='/' component={App}/>
	<Route exact path='/signup' component={Signup}/>
	<Route exact path="/post-a-job" component={Postjob}/>
	<Route exact path='/admin' component={Admin}/>
	<Route exact path="/howitworks" component={HowitWorks}/>
	<Route exact path='/proposal' component={Proposal}/>
	<Route exact path='/admin' component={Admin}/>
	<Route exact path='/allplans' component={Planspage}/>
	<Route exact path='/user' component={Users}/>
	<Route exact path="/forgotmail" component={Forgotmail}/>
	<Route exact path="/test" component={Exampleapp}/>
	<Route exact path="/searchjob" component={SearchJobs}/>
	<Route exact path="/logout" component={Logout}/>
	<Route exact path="/searchalljobs" component={SearchallJobs}/>
	<Route exact path="/about" component={About}/>
	<Route exact path="/forgotpass" component={Forgotpass}/>
	<Route exact path="/searchallongoingjobs" component={Ongoingalljobs}/>
	<Route exact path="/allbids" component={Allbids}/> 
	</div>
	</BrowserRouter>,
document.getElementById('root')
	);
registerServiceWorker();
