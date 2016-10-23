import React, { Component } from 'react';

import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class TodoItem extends Component {
  
  componentWillMount() {
    this.setState({
      showEdit: false,
      isDone: false
    })
  }
  componentDidMount() {
    // console.log('componentDidMount for TodoItem', this)
  }

  editTodo(){
    var temToggleState = !this.state.showEdit;
    this.setState({
      showEdit: temToggleState
    })
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
    this.props.changeStatus(this.props.todoId)
  }
  

  render(){
    return (
      <ListItem className="clearfix">
        { this.state.showEdit ? 
         <div className="inputWrap clearfix">
            <TextField className="" hintText="thing to do" value={this.props.text} onChange={this.handleChange.bind(this)} />
            <RaisedButton className="" label="Save" onClick={this.editTodo.bind(this)} />
         </div>
          :
          <div className="inputData clearfix">
            <input type="checkbox" onChange={this.toggleTodoState.bind(this)} checked={ this.props.isDone || this.state.isDone} />
            <span className="">{this.props.text} </span>
            <RaisedButton className="" label="edit" onClick={this.editTodo.bind(this)} />
          </div>
        }
      </ListItem>
    )
  }
}