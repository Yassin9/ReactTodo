import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="title-bar" data-responsive-toggle="top-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="top-menu"></button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar" id="top-menu">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Todo App</li>
              <li><IndexLink to="/" activeClassName="active">Todo</IndexLink></li>
              <li><Link to="/about" activeClassName="active">About</Link></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by <a href="https://github.com/Yassin9" target="_blank">Yassine</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
