import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
     <h1>Cocktails</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
