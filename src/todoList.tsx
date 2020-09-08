import React from 'react';
import Todo from './todo';
import TodoForm from './todoForm';

interface TodoListState {
  todos: TodoInterface[]
}

interface TodoInterface {
  name: string;
  done: boolean;
}

class TodoList extends React.Component<{}, TodoListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [
        {name: 'first thing to do', done: false},
        {name: 'second thing to do', done: false}
      ]
    }
  }

  _handleSubmit = (todoName: string) => {
    console.log('handle', todoName);
    this.setState({
      todos: [
        ...this.state.todos, {name: todoName, done: false}
      ]
    })
  }



  render() {

    return <div>
      <TodoForm 
        submitButtonLabel='Add'
        handleSubmit= { this._handleSubmit }
      />
      <hr/>
      <ul>
      {this.state.todos.map((todo) => {
        return <Todo 
          name={todo.name} 
          done={todo.done} 
          setTodoDone= {() => {
            console.log(`${todo.name} is done !`);
            this.setState({
              todos: [
                ...this.state.todos.filter((todoInState) => todoInState !== todo),
                {name: todo.name, done: true}
              ]
            });
          }}
          deleteTodo= {() => {
            console.log(`${todo.name} is deleted !`);
            this.setState({
              todos: [
                ...this.state.todos.filter((todoInState) => todoInState !== todo)
              ]
            })
          }}
          setTodoUndone= {() => {
            console.log(`${todo.name} is undone !`);
            this.setState({
              todos: [
                ...this.state.todos.filter((todoInState) => todoInState !== todo),
                {name: todo.name, done: false}
              ]
            })
          }}
        />
      })}
    </ul>
  </div>
  }
}

export default TodoList;