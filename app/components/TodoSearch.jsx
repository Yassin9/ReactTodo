import React from 'react';
import PropTypes from 'prop-types';

class TodoSearch extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const showCompleted = this.showCompleted.checked;
    const searchText = this.searchText.value.toLowerCase();
    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            ref={(i) => this.searchText = i}
            onChange={this.handleChange}
            placeholder="Search Todo" autoFocus/>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref={(i) => this.showCompleted = i}
              onChange={this.handleChange}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

TodoSearch.propTypes = {
  onSearch: PropTypes.func
};
TodoSearch.defaultProps = {};

export default TodoSearch;
