import Navbar from './Navbar';
import React from 'react';
import '../styles/global.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 Web Slinger</p>
      </footer>
    </div>
  );
}
