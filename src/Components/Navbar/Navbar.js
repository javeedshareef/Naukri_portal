import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <div className="container-fluid p-0">
      <div className='row no-gutters'>
        <div className='col-12'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <section>
              <img src="/assets/images/logo.png" alt="Main" />
            </section>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              
              <ul className="navbar-nav nav-list">

                <li className="nav-item active">
                  <Link className="nav-link" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">ABOUT US</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/listofJobs">LISTOFJOBS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/createjobs">CREATEJOBS</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contactUs">CONTACT</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link post" to="/postJob">POST A JOB</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link jobseeker" to="/">JOB SEEKER</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">LOGIN</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/signup">SIGNUP</Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>

  )
}

export default Navbar;