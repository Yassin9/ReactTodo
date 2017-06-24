import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      completed: props.completed
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ completed: e.target.value });
  }

  render() {
    const {id, text} = this.props;
    const {completed} = this.state;
    return (
      <div>
        <div>
          <input type="checkbox" onChange={this.handleChange} value={completed} checked={completed}/>
          <span> {id}: {text}</span>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  completed: PropTypes.bool
};
Todo.defaultProps = {};

export default Todo;
