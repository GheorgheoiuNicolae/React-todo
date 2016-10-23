import React, { Component } from 'react';

export default class Title extends Component {
  constructor(){
    super();
    this.state = {
      name: "Todo List app"
    }
  }

  render(){
    return <h2>{this.state.name}</h2>
  }
}