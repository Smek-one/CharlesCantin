import React from "react";
import Logo from "../public/logo.svg";
import Image from "next/image";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Image
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            className="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#burgerIcon"
          aria-controls="burgerIcon"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="burgerIcon">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Accueil
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Galeries
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/prices">
                Tarifs & prestations
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn search-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;
