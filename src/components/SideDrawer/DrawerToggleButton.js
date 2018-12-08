import React from 'react';
import './DrawerToggleButton.css'

export default function DrawerToggleButton() {
  return (
    <button className="toggle-button">
      <div className="toggle-button__line"/>
      <div className="toggle-button__line"/>
      <div className="toggle-button__line"/>
    </button>
  )
}