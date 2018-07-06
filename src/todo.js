import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';
import TodoListItem from './todoslistitem';

export default class TodoList extends Component {
  renderItems()
  {
    const props=_.omit(this.props,'todo');
    //console.log(props);
    return _.map(this.props.todo,(todo,index)=> <TodoListItem key={index}{...todo} {...props}/>);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}


