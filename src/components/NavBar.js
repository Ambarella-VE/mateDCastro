import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">MateArt</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Inicio <span className="sr-only">(Actual)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Modelos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Precios</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Materiales
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Madera</a>
          <a className="dropdown-item" href="#">Cerámica</a>
          <a className="dropdown-item" href="#">Metal</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar