import React, { Component } from 'react';
import _ from 'lodash';

import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TodoItem from './TodoItem/TodoItem';
import AddTodo from './AddTodo/AddTodo';
import todoStore from '../../stores/TodoStore';
import * as todoActions from '../../actions/actions';

export default class Todo extends Component {

  componentWillMount() {
    this.setState({
      todos: todoStore.getAll()
    });

    todoStore.on("change", () => {
      this.setState({
        todos: todoStore.getAll()
      });
    })
  }

  addNewTodo(item){
    todoActions.createTodo(item)
  }


  saveReceivedChanges(item){
    let todos = this.state.todos;
    let todoToChange = _.find(todos, {id: item.id});
    let idx = todos.indexOf(todoToChange);
    todos[idx]= {
      text: item.text,
      id: item.id,
      isDone: item.isDone
    }

    this.setState({
      todos: todos
    })
  }

  clearDone(){
    let completed = _.filter(this.state.todos, {isDone: true});
    for(let i = 0; i < completed.length; i++){
      todoActions.deleteTodo(completed[i].id);
    }
  }

  createRandomTodo(){
    todoActions.createTodo(Date.now());
  }


  render(){
    return (
      <div className="todo-component">
        <AddTodo updateTodo={this.addNewTodo.bind(this)}  />

        <button type="button" onClick={this.clearDone.bind(this)} className="btn btn-default">clear done</button>
        <button onClick={this.createRandomTodo.bind(this)}>Create Random todo</button>
        <List>
          {this.state.todos.map(function(item){
            return (
              <div key={item.id} className="clearfix">
                <TodoItem
                  text={item.text}
                  todoId={item.id}
                  isDone={item.isDone}
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
