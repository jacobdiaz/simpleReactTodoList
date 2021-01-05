import React, { Component } from "react";
import "./TodoApp.css";
import TodoCard from "./TodoCard";

export default class TodoApp extends Component {
  render() {
    return (
      <div className="app-container">
        <TodoCard />
      </div>
    );
  }
}
