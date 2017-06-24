import React from 'react';
import PropTypes from 'prop-types';
import Todo from 'Todo';

class TodoList extends React.Component {
  render() {
    const todos = this.props.todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });
    return (
      <div>
        {todos}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array
};
TodoList.defaultProps = {};

export default TodoList;
