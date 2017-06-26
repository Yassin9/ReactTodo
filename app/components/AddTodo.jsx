import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = e.target.text.value;

    if (text.length > 0) {
      this.props.onAddTodo(text);
      e.target.text.value = '';
    } else {
      e.target.text.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func
};
AddTodo.defaultProps = {};

export default AddTodo;
