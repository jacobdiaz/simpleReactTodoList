import React, { Component } from "react";
import uuid from "react-uuid";
import "./TodoApp.css";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.taskName !== "") {
      this.props.submitTodo({ taskName: this.state.taskName, id: uuid() });
      this.setState({ taskName: "" });
    }
  }
  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlfrom="taskName"></label>
          <input
            id="taskName"
            name="taskName"
            type="text"
            placeholder="Go to gym, etc..."
            value={this.state.taskName}
            onChange={this.handleChange}
          ></input>
          <button className="add-task-btn">Add Task</button>
        </form>
      </div>
    );
  }
}
