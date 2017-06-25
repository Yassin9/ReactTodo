import React from 'react';
import PropTypes from 'prop-types';
import Todo from 'Todo';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const todos = this.props.todos.map((todo) => {
      return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>;
    });
    return (
      <div>
        {todos}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onToggle: PropTypes.func
};
TodoList.defaultProps = {};

export default TodoList;
