import React, { Component } from 'react';

export default class TodoListItem extends Component{
	
	constructor(props)
	{
    	super(props);
    	this.state=
    	{
      	isEditing:false
    	};
    	this.save=<td>
  				<button onClick={this.onSaveClick.bind(this)}>Save</button>
  				<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
  				</td>;
  		this.edit=<td>
  	  			<button onClick={this.onEditClick.bind(this)}>Edit</button>
  				<button onClick={this.props.deleteTask.bind(this,this.props.task)}>Delete</button>
  		</td>;
    	  	}
	onEditClick(){
		this.setState({isEditing:true});
	}
	onCancelClick(){
		this.setState({
		isEditing:false
		});
	}
	onSaveClick(event){
		event.preventDefault();
		const oldtask=this.props.task;
		const newtask=this.refs.editInput.value;
		this.props.saveTask(oldtask, newtask);
		this.setState({isEditing:false});
	}
	renderActionSection(){

  		if(this.state.isEditing){
  			return(this.save);
  		}
  		return(this.edit);
  }

	renderTaskSection()
	{
  		const{task, isCompleted}=this.props;
  		//console.log(this.props);
  		const taskStyle=
  		{
  			color:isCompleted ? 'red' : 'green',
  			cursor:'pointer'
  		};
  		const editinput=<td>
  				<form onSubmit={this.onSaveClick.bind(this)}>
  				<input type="text"  defaultValue={task} ref="editInput"/>
  				</form>
  				</td>;
  		const taskinput=<td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{task}</td>;
  		if (this.state.isEditing){
  			return (editinput);
  		}
  		return(taskinput);
  	}
	render(){
		return(
			<tr>{this.renderTaskSection()}
				
				{this.renderActionSection()}
			</tr>
			);
	}

}