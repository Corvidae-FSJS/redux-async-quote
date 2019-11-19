import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className={styles.Header}>
    <h1>The Simpsons Random Quotes</h1>
    <Link to="/">Home</Link>
  </header>
);

export default Header;
