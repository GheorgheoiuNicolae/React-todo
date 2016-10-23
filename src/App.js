// FIREBASE
// const dbRef = firebase.database().ref('data-modeling');
// let articlesRef = dbRef.child('articles');

// for(var i = 0; i < 5; i++){
//   articlesRef.push({
//     test: ' some string',
//     date: (new Date()).toString()
//   });
// }

// articlesRef.on('value', function(snap){
//   let articlesArr = [];
//   let articles = snap.val();

//   let keys = Object.keys(articles);
//   let item = {};

//   let i = keys.length;
//   while(i--){
//     item = articles[keys[i]];
//     item.id = keys[i];
//     articlesArr.push(item);
//   }

//   this.setState({
//     articles: articlesArr
//   });
// }.bind(this));

// // render
// {this.state.articles.map(function(item){
//   return <li key={ item.id }>{item.id} - {item.date}</li>;
// })}


import React, { Component } from 'react';
import './App.css';
// import * as firebase from 'firebase';
import Header from './components/Header';
import Todo from './components/todo/Todo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
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
