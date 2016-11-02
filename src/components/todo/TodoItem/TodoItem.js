import React, { Component } from 'react';

import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import * as todoActions from '../../../actions/actions';

export default class TodoItem extends Component {

  componentWillMount() {
    this.setState({
      showEdit: false,
      isDone: false
    })
  }

  editTodo(){
    var temToggleState = !this.state.showEdit;
    this.setState({
      showEdit: temToggleState
    });
    let todo = {
      id: this.props.todoId,
      text: this.props.text,
      isDone: this.state.isDone
    }
    todoActions.updateTodo(todo);
  }

  deleteTodo(){
    todoActions.deleteTodo(this.props.todoId);
  }

  handleChange(e){
    var text = e.target.value;
    let itemToSave = {
      id: this.props.todoId,
      text: text
    }
    this.props.edit(itemToSave)
  }

  toggleTodoState(){
    let item = {
      id: this.props.todoId,
      isDone: !this.props.isDone,
      text: this.props.text
    }
    console.log('item', item, this.props);
    todoActions.updateTodo(item);
  }


  render(){
    return (
      <ListItem className="clearfix">
        { this.state.showEdit ?
         <div className="inputWrap">
            <TextField hintText="thing to do" value={this.props.text} onChange={this.handleChange.bind(this)} />
            <RaisedButton label="Save" onClick={this.editTodo.bind(this)} />
         </div>
          :
          <div className="inputData">
            <input type="checkbox" onChange={this.toggleTodoState.bind(this)} checked={ this.props.isDone || this.state.isDone} />
            <span>{this.props.text} </span>
            <RaisedButton label="edit" onClick={this.editTodo.bind(this)} />
            <RaisedButton label="x" onClick={this.deleteTodo.bind(this)} />
          </div>
        }
      </ListItem>
    )
  }
}
