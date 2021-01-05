import React, { Component } from "react";
import { FaCheck, FaTrashAlt, FaRegEdit } from "react-icons/fa";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditting: false,
      formInput: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleDelete() {
    this.props.deleteTodo(this.props.id);
  }
  toggleEdit() {
    this.setState({ isEditting: !this.state.isEditting }); // Toggle Mechanism
  }
  updateTodo() {
    this.props.updateTodo(this.props.id, this.state.formInput);
    this.toggleEdit();
  }

  render() {
    let result; // Result is the resulting div based on isEditing state

    // If edit button is pressed
    if (this.state.isEditting) {
      result = (
        <div className="todo-item">
          <form>
            <input
              type="text"
              name="formInput"
              id="formInput"
              value={this.state.formInput}
              onChange={this.handleChange}
            ></input>
          </form>
          <div>
            <FaTrashAlt
              onClick={this.handleDelete}
              style={{ marginRight: "10px" }}
              className="todo-icon"
            />
            <FaCheck onClick={this.updateTodo} className="todo-icon" />
          </div>
        </div>
      );
    }

    // By default result is
    else {
      result = (
        <div className="todo-item">
          <div>{this.props.itemName}</div>
          <div>
            <FaTrashAlt
              onClick={this.handleDelete}
              style={{ marginRight: "10px" }}
              className="todo-icon"
            />
            <FaRegEdit onClick={this.toggleEdit} className="todo-icon" />
          </div>
        </div>
      );
    }
    return result;
  }
}
