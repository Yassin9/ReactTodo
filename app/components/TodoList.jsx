import React from 'react';
import PropTypes from 'prop-types';
import Todo from 'Todo';

class TodoList extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    const {todos} = this.props;
    const renderTodos = () => {
      if (todos.length === 0) return <p className="container__message">Nothing To Do</p>;

      return todos.map((todo) => {
        return <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>;
      });
    };

    return (
      <div>
        {renderTodos()}
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
