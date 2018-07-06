import React, { Component } from 'react';

import './App.css';
export default class Functions extends Component 
{
  handleCreate(event)
  {
        event.preventDefault();

        const createInput=this.refs.createInput;
        const task = createInput.value;
        const validateInput= this.validateInput(task);

        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value="";
  }
  validateInput(task)
  {
    if(!task){
          return("please enter a task");
        }
  }
  render(){
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
      <input type="text" ref="createInput" placeholder="new task" />
      <button>Create</button>
      </form>
      );
    }
}
