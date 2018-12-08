import React from 'react';
import './SideDrawer.css';

export default function SideDrawer() {
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  )
}