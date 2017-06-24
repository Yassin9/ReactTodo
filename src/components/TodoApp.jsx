import React from 'react';
import PropTypes from 'prop-types';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component {
  constructor () {
    super();
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: 1, text: 'Walk the dog', completed: false},
        { id: 2, text: 'Clean the yard', completed: false},
        { id: 3, text: 'Leave mail on porch', completed: false},
        { id: 4, text: 'Play video games', completed: true}
      ]
    };
  }

  handleSearch(showCompleted, searchText) {
    this.setState({showCompleted, searchText});
  }

  handleAddTodo(text) {
    const todos = this.state.todos;
    const todo = {
      id: todos.length + 1,
      text: text,
      completed: false
    };
    todos.push(todo);
    this.setState({todos});
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
