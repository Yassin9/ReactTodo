import React from 'react';
import PropTypes from 'prop-types';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import uuid from 'node-uuid';


class TodoApp extends React.Component {
  constructor () {
    super();
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: uuid(), text: 'Walk the dog', completed: false},
        { id: uuid(), text: 'Clean the yard', completed: false},
        { id: uuid(), text: 'Leave mail on porch', completed: false},
        { id: uuid(), text: 'Play video games', completed: true}
      ]
    };
  }

  handleSearch(showCompleted, searchText) {
    this.setState({showCompleted, searchText});
  }

  handleAddTodo(text) {
    const todo = {
      id: uuid(),
      text: text,
      completed: false
    };
    this.setState({todos: [
      ...this.state.todos, todo
    ]});
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

TodoApp.propTypes = {};
TodoApp.defaultProps = {};

export default TodoApp;
