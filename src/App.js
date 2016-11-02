import React, { Component } from 'react';
import './App.css';
// import * as firebase from 'firebase';
import Header from './components/Header';
import Todo from './components/todo/Todo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import * as firebase from 'firebase';
import * as todoActions from './actions/actions';

class App extends Component {

  componentWillMount(){
    console.log('App component');
    todoActions.getAllTodos();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Todo />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
