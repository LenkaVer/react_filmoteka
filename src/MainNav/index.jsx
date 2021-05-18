import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">Domů</Link>
        </li>
        <li>
          <Link to="/filmy">Filmy</Link>
        </li>
        <li>
          <Link to="/pridat-film">Přidat Film</Link>
        </li>
      </ul>
    </nav>
  );
};
