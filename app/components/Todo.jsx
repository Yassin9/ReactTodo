import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


class Todo extends React.Component {
  render() {
    const {id, text, completed, createdAt, completedAt, onToggle} = this.props;
    const todoClassName = completed ? 'todo todo-completed' : 'todo';
    const renderDate = () => {
      let timestamp = createdAt;
      let message = 'Created';
      if (completed) {
        timestamp = completedAt;
        message = 'Updated';
      }
      return `${message} ${moment.unix(timestamp).fromNow()}`;
    };

    return (
      <div className={todoClassName} onClick={() => onToggle(id)}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <span>{renderDate()}</span>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
  createdAt: PropTypes.number,
  completedAt: PropTypes.number,
  onToggle: PropTypes.func
};
Todo.defaultProps = {};

export default Todo;
