import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <header className="header-container">
        <h1 className="header-title">PrimeNews</h1>
        <p className="header-subtitle">Your Source for Trusted News</p>
        {/* <p>Search the News or Select it from the category section.</p> */}
      </header>
    </>
  );
}

export default Header;
