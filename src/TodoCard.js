// Parent Card
import React, { Component } from "react";
import "./TodoApp.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
export default class TodoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.renderTasks = this.renderTasks.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  submitTodo(todoName) {
    this.setState({
      todo: [...this.state.todo, todoName],
    });
  }

  deleteTodo(todoId) {
    console.log("Deleting todo with ID:" + todoId);
    this.setState((st) => ({
      todo: st.todo.filter((todo) => todo.id !== todoId),
    }));
  }

  updateTodo(id, newTaskName) {
    // Create a new array of todos
    const updatedTodos = this.state.todo.map((elem) => {
      if (elem.id === id) {
        // If found matching id, change the change the taskname to the new taskName
        return { ...elem, taskName: newTaskName };
      }
      return elem;
    });
    // Update State
    this.setState({
      todo: updatedTodos,
    });
  }
  renderTasks() {
    return (
      <div>
        {this.state.todo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              itemName={todo.taskName}
              id={todo.id}
              deleteTodo={this.deleteTodo}
              updateTodo={this.updateTodo}
            />
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="todo-card">
        <h3>Todo List</h3>
        {this.renderTasks()}
        <TodoForm submitTodo={this.submitTodo} />
      </div>
    );
  }
}
