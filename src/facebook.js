import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';


export default class Facebook extends Component {
 constructor(props){
    super(props);
    this.state={
        redirect:false
    }
    this.signup=this.signup.bind(this);
 }
 signup(res,type){

 }
render(){
    const responseFacebook = (response) => {
  console.log(response);
    }

const componentClicked = (response) =>{
    console.log(response);
}
    return(
<div>
  <FacebookLogin
    appId="1966909883525665"
    autoLoad={true}
    textButton="Sign up with Facebook"
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook}
     />,

</div>
);
}
}



///appId      : 1966909883525665,
   //           cookie     : true,  // enable cookies to allow the server to access the session
     //         xfbml      : true,  // parse social plugins on this page
       //       version    : 'v2.8'