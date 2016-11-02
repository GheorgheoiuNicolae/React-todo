import dispatcher from '../dispatchers/dispatcher';
import * as db from '../database/dbinfo';

export function createTodo(text){
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text
  });

  db.todosRef.push({
    text: text,
    isDone: false,
    date: (new Date()).toString(),
    id: Date.now()
  });
}

export function deleteTodo(id){
  console.log('delete: ', id);
  db.todosRef.child(id).remove();
  db.todosRef.on('child_removed', function(snap){
    console.log('snap', snap.val());
  })
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  });
}

// use this to push new dummy data into Firebase
export function createFirebaseData(){
  console.log('createFirebaseData');
  for(var i = 0; i < 5; i++){
    db.todosRef.push({
      text: 'Todo ' + i,
      isDone: false,
      date: (new Date()).toString()
    });
  }
  this.getAllTodos()
}

export function getAllTodos(){
  dispatcher.dispatch({type: 'REQUEST_TODOS'});

  db.todosRef.once('value', function(snap){
    var todosArr = [];
    let todos = snap.val();

    let keys = Object.keys(todos);
    let item = {};

    let i = keys.length;
    while(i--){
      item = todos[keys[i]];
      item.id = keys[i];
      todosArr.push(item);
    }
    dispatcher.dispatch({type: 'RECEIVED_TODOS', todos: todosArr});
  })
}

export function updateTodo(item){
  db.todosRef.child(item.id).update(item);
  dispatcher.dispatch({type: 'UPDATE_TODO', item});
  console.log('updateTodo', item);
}
