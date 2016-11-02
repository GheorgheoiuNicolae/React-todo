import React, { Component } from 'react';

export default class AddTodo extends Component {

  componentWillMount() {
    this.setState({
      text: 'Default'
    });
  }

  logChange(e){
    var item = e.target.value;
    this.setState({
      text: item
    });
  }

  submitTodo(){
    this.props.updateTodo(this.state.text)
    this.setState({
      text: ' '
    })
  }

  keypressFun(e){
    if (e.which === 13 || e.keyCode === 13) {
        this.submitTodo()
    }
  }

  render(){
    return (
      <div>
        <input value={this.state.text} type="text" onKeyPress={this.keypressFun.bind(this)} ref="text" onChange={this.logChange.bind(this)} />
        <button onClick={this.submitTodo.bind(this)} >Add item</button>
      </div>
    )
  }
}
