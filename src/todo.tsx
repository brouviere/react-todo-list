import React from 'react';

export interface TodoProps {
  name: string;
  done: boolean;
  setTodoDone: () => void;
  setTodoUndone: () => void;
  deleteTodo: () => void;
}

class Todo extends React.Component<TodoProps> {

  constructor(props: TodoProps) {
    super(props);
    this.state = {
      done: false
    }
  }

  render() {
    const buttonChange = <button onClick={() => this.props.setTodoDone()}>Done !</button>
    const buttonUndone = <button onClick={() => this.props.setTodoUndone()}>Undone</button>
    const buttonDelete = <button onClick={() => this.props.deleteTodo()}>X</button>
      if(this.props.done) {
        return <div>
          <li style={{textDecoration: "line-through"}}>{this.props.name}</li>
          {buttonDelete} / {buttonUndone}
        </div>
      } else {
        return <div>
        <li>{this.props.name}</li>
        {buttonChange}
      </div>
      }
  }
}

export default Todo;