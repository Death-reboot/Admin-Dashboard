import React from 'react'
import './navigation.css'
function Navigation() {
    return (
      <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              {/* <i className="fa fa-city" aria-hidden="true"></i> */}
            </span>
            <span className="title"><h2>Nikhil Singh</h2></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fa fa-home" aria-hidden="true"></i>
            </span>
            <span className="title">Sites</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fa fa-users" aria-hidden="true"></i>
            </span>
            <span className="title">Employees</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fa fa-comment" aria-hidden="true"></i>
            </span>
            <span className="title">Transaction</span>
          </a>
        </li>
        
        <li>
          <a href="#">
            <span className="icon">
              <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
            <span className="title">Password</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <i className="fa fa-sign-out" aria-hidden="true"></i>
            </span>
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
    )
}

export default Navigation
