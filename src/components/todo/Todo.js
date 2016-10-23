import React, { Component } from 'react';
import _ from 'lodash';

// import MobileTearSheet from '../../../MobileTearSheet';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TodoItem from './TodoItem/TodoItem';
import AddTodo from './AddTodo/AddTodo';

export default class Todo extends Component {

  componentWillMount() {
    this.setState({
      todos: [{
        text: 'Buy milk',
        isDone: false,
        id: 1
      }, {
        text: 'Buy meat!',
        isDone: false,
        id: 2
      }, {
        text: 'Buy something else!',
        isDone: true,
        id: 3
      }]
    })
  }

  componentDidMount() {
    console.log('componentDidMount todo.js', this.state);
  }

  addNewTodo(item){
    this.state.todos.push({text: item, id: new Date().getTime() });
    this.setState({
      timestamp: new Date().getTime()
    });
  }


  saveReceivedChanges(item){
    let todos = this.state.todos;
    let todoToChange = _.find(todos, {id: item.id});
    let idx = todos.indexOf(todoToChange);
    todos[idx]= {
      text: item.text,
      id: item.id
    }
    
    this.setState({
      todos: todos
    })
  }

  changeStatus(item){
    let todos = this.state.todos;
    let todoToChange = _.find(todos, {id: item});
    let idx = todos.indexOf(todoToChange);

    todoToChange.isDone = !todoToChange.isDone;
    todos[idx]= {
      isDone: todoToChange.isDone,
      id: todoToChange.id,
      text: todoToChange.text
    }
    
    this.setState({
      todos: todos
    })
  }

  render(){
    return (
      <div className="todo-component">
        <AddTodo updateTodo={this.addNewTodo.bind(this)}  />

        <List>
          {this.state.todos.map(function(item){
            console.log('item', item);
            return (
              <div key={item.id} className="clearfix">
                <TodoItem 
                  text={item.text} 
                  todoId={item.id} 
                  isDone={item.isDone}
                  changeStatus={this.changeStatus.bind(this)}
                  edit={this.saveReceivedChanges.bind(this)}
                />
                <Divider />
              </div>
            )
          }.bind(this))}
        </List>
      </div>
    )
  }
}