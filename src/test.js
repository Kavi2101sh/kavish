import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom'; 
import {Provider, withAlert } from "react-alert";
import AlertTemplate from "react-alert-template-basic"; 

const options = {
  timeout: 5000,
  position: "bottom center"
};
export default class ExampleApp extends React.Component {

	constructor(props)
	{
		super(props);
		this.getVal=this.getVal.bind(this);
		this.state={
			redirect:false
		};
		if(!this.state.redirect){
		}
		console.log(this.state.redirect);
	}
	getVal(e){
		e.preventDefault();
		console.log("hello");
		this.setState({
			redirect:true
		}, function(){
			console.log(this.state.redirect);
			if(this.state.redirect==true){
				this.props.history.push('/signup');
			}
		});
	}
	compone(){
		this.setState({
			redirect:true
		}, function(){
			console.log(this.state.redirect);
			if(this.state.redirect==true){
				this.props.history.push('/signup');
			}
		});
	}
	setVal(e){
		 this.props.alert.show("Oh look, an alert!");
	}
 	render(){
  		return(
  			<div>
      		<button onClick={this.getVal.bind(this)}>setter</button>
      		<Provider template={AlertTemplate}{...options}>
      		<button onClick={this.setVal.bind(this)}>Show Alert</button>
      		</Provider>
      </div>
    	);
 }


 }
///ReactDOM.render(<ExampleApp {...props} />)
///<------------------------------test of states ------------------------------->

// const Name=[{
//     name:'Kavish'
//   }];
// class App extends Component{
//   constructor(props){
//     super(props)
    
//     this.state={Name};
//     console.log(this.state.Name);
// }
// inputname(event){
//   event.preventDefault();
//   const nameValue=this.refs.inputname.value;
//   this.state.Name.push({name:nameValue});
//   this.setState({Name:this.state.Name});
//   console.log(this.state.Name);
//   this.refs.inputname.value="";
// }
//   render(){
    
//     return(
//       <div>
//       <header className="App-header">
//            <img src={logo} className="App-logo" alt="logo" />
//            <h1 className="App-title">Welcome to React</h1>
//       </header>
//       <header>Hello {this.state.Name.name}</header>
//         <p>Your name::</p>
//         <form  onSubmit={this.inputname.bind(this)} method="post">
//         <input type="text" placeholder="name" name="name" ref="inputname"/>
//         <input type="submit"/>
//         </form>
//       </div>
//       );
//   }



//<---------------------- todo list ------------------------------------>

//   constructor(props){
//     super(props);
//     this.state={
//       todo
//     };
//   }
    

//   createTask(task){
//       this.state.todo.push({task,
//       isCompleted:true});
//       this.setState({todo:this.state.todo});
// }

//   toggleTask(task){
//     const foundTodo=_.find(this.state.todo,todo=> todo.task===task);
//     foundTodo.isCompleted=!foundTodo.isCompleted;
//     this.setState({todo:this.state.todo})
//   }
//   saveTask(oldtask, newtask){
//     const foundTodo=_.find(this.state.todo,todo=> todo.task===oldtask);
//     foundTodo.task=newtask;
//     this.setState({todo:this.state.todo});

//   }
//   deleteTask(tasktoDelete){
//     _.remove(this.state.todo,todo=> todo.task===tasktoDelete);
//     this.setState({todo:this.state.todo});
//   }
  
//   render() {
//     console.log(this.state.todo);
//     console.log("hello");
//     return (
//       <div className="App">
//         //<header className="App-header">
//           //<img src={logo} className="App-logo" alt="logo" />
//           //<h1 className="App-title">Welcome to React</h1>
//         //</header>
//         //<p className="App-intro">
//          // To get started , edit <code>src/App.js</code> and save to reload.
//         //</p>

//         <div>
//         <Functions createTask={this.createTask.bind(this)} />

//         <TodoList 
//         todo={this.state.todo}
//         toggleTask={this.toggleTask.bind(this)}
//         saveTask={this.saveTask.bind(this)}
//         deleteTask={this.deleteTask.bind(this)}
//         />
//         </div>
//         <div>
//           <Test todo={this.state.todo}/>

//         </div>
//       </div>
//     );
//   }
// }