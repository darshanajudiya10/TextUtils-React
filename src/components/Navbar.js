import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        
        <button className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.about}</a>
            </li>
          </ul>

          {/* Search bar aligned right */}
          {/* <form className="d-flex ms-auto" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { 
  title: PropTypes.string.isRequired, 
  about: PropTypes.string
}

Navbar.defaultProps = {
  title: 'title is here',
  about: 'About'
}
