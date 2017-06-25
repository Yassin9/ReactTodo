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
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: uuid(), text: 'Walk the dog', completed: false},
        { id: uuid(), text: 'Clean the yard', completed: false},
        { id: uuid(), text: 'Leave mail on porch', completed: true},
        { id: uuid(), text: 'Play video games', completed: false}
      ]
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.showCompleted !== this.state.showCompleted || prevState.searchText !== this.state.searchText) {
  //     this.setState({});
  //   }
  // }

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

TodoApp.propTypes = {};
TodoApp.defaultProps = {};

export default TodoApp;
