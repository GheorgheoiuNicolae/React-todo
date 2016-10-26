import _ from 'lodash';
import { EventEmitter } from 'events';
import dispatcher from '../dispatchers/dispatcher'

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [{
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
    }];
  }

  getAll() {
    return this.todos;
  }

  createTodo(text){
    this.todos.push({
      text,
      isDone: false,
      id: Date.now()
    });

    this.emit("change");
  }

  deleteTodo(id){
    let tds = this.todos;
    let item = _.find(tds,{ id: id});
    let idx = tds.indexOf(item);

    tds.splice(idx, 1);
    this.todos = tds;
    this.emit("change");
  }

  handleActions(action){
    switch(action.type){
      case 'CREATE_TODO': {
        this.createTodo(action.text);
        break
      }
      case 'DELETE_TODO': {
        this.deleteTodo(action.id);
        break
      }
      default: {
      }
    }
  }
}

const todoStore = new TodoStore();
window.todoStore = todoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;

export default todoStore;
