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

    console.log('create todo fired', text)
    this.todos.push({
      text,
      isDone: false,
      id: Date.now()
    });

    this.emit("change");
  }

  handleActions(action){
    console.log('sadasd', action)

    switch(action.type){
      case 'CREATE_TODO': {
        console.log('CREATE_TODO case: ', action)
        this.createTodo(action.text)
      }
    }
  }
}

const todoStore = new TodoStore();
window.todoStore = todoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore));
window.dispatcher = dispatcher;

export default todoStore;