import React from 'react';
import PropTypes from 'prop-types';
import Search from 'Search';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

class TodoApp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Walk the dog'},
        { id: 2, text: 'Clean the yard'},
        { id: 3, text: 'Leave mail on porch'},
        { id: 4, text: 'Play video games'}
      ]
    };
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <Search/>
        <TodoList todos={todos}/>
        <AddTodo/>
      </div>
    );
  }
}

TodoApp.propTypes = {};
TodoApp.defaultProps = {};

export default TodoApp;
