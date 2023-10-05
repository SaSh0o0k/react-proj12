import React, { Component } from 'react';
import Info from '../Info';
import styles from './Footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footerContainer}>
        <h2>THIS IS FOOTER</h2>
        <Info />
      </footer>
    );
  }
}

export default Footer;
