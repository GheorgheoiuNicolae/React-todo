import React, { Component } from 'react';
import * as todoActions from '../../actions/actions';

export default class Title extends Component {
  constructor(){
    super();
    this.state = {
      name: "Todo List app"
    }
  }

  generateTodos(){
    todoActions.createFirebaseData()
  }

  render(){
    return (
      <div>
        <h2>{this.state.name}</h2>
        <button onClick={this.generateTodos}>Generate todos</button>
      </div>
    )
  }
}
