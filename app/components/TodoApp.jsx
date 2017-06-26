import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoAPI from 'TodoAPI';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component {
  constructor () {
    super();
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      TodoAPI.setTodos(this.state.todos);
    }
  }

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
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
      completed: false,
      createdAt: moment().unix(),
      completedAt: undefined
    };
    this.setState({todos: [
      ...this.state.todos, todo
    ]});
  }

  render() {
    const {todos, showCompleted, searchText} = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TodoApp.propTypes = {};
TodoApp.defaultProps = {};

export default TodoApp;
