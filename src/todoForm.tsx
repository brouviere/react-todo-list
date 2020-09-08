import React from 'react';

interface TodoFormInterface {
  submitButtonLabel: string;
  handleSubmit: (arg: string) => any;
}

interface StateInterface {
  todoName: string;
}

class TodoForm extends React.Component<TodoFormInterface, StateInterface> {
  constructor(props:TodoFormInterface) {
    super(props);
    this.state = { todoName: '' }
    this._onSubmit = this._onSubmit.bind(this);
    console.log(this.props);
  }

  _onSubmit(e:any) {
    e.preventDefault();
    console.log(this.state); //it logs the input values.
    this.props.handleSubmit(this.state.todoName);
}

  changeHandler = (event: any) => {
    this.setState({todoName: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this._onSubmit}>
        <label htmlFor="new-todo">New Todo:</label>
        <input type="text" id="new-todo" name="new-todo" onChange={this.changeHandler}/>
        <button type="submit" name="add"> {this.props.submitButtonLabel} {this.state.todoName}</button>
      </form>
    );
  }

}

export default TodoForm;