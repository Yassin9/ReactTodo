import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  render() {
    const {id, text, completed, onToggle} = this.props;
    return (
      <div onClick={() => onToggle(id)}>
        <input
          type="checkbox"
          checked={completed}
        />
        {text}
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
  onToggle: PropTypes.func
};
Todo.defaultProps = {};

export default Todo;
