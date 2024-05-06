import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { itemsNav } from "../constants/itemNavs";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg  bg-${theme}`}>
      <div className="ps-4">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <Link className="navbar-brand" to="/">
        EcoTechSolutions
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {itemsNav.map((item) => (
            <li className="nav-item" key={item.id + item.nombre}>
              <NavLink className="nav-link" to={item.ruta}>
                {item.nombre}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="pe-4">
        <button className="btn btn-dark my-2" onClick={handleTheme}>
          {theme === "success" ? "Green" : "Blue"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
