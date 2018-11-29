import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <div className="wrap-logo">
        <img src={props.image} alt={props.alt} className="logo" />
      </div>
      <div className="line" />
    </div>
  );
}
