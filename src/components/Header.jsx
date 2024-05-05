import React from "react";

const Header = () => {
  return (
    <header>
      <h1>EcoTech Solutions</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/conservation-projects">Conservation Projects</a>
          </li>
          {/* Agregar más enlaces según sea necesario */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
