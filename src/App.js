import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import DisplayQuote from './containers/DisplayQuote';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <DisplayQuote />
    </Router>
  );
}