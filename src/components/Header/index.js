import React, { Component } from 'react';
import Profile from '../Profile';
import Menu from '../Menu';
import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.headerContainer}>
        <h2>THIS IS HEADER</h2>
        <Profile />
        <Menu toggleTheme={this.props.toggleTheme} />
      </header>
    );
  }
}

export default Header;
