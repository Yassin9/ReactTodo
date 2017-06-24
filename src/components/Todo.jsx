import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  render() {
    const {id, text} = this.props;
    return (
      <div>
        <h2>{id}: {text}</h2>
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string
};
Todo.defaultProps = {};

export default Todo;
