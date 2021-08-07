import React from 'react'
import './topbar.css'
function Topbar() {
  function toggleMenu() {
    let toggle = document.querySelector(".toggle");
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  }
    return (
      <div className="topbar">
        <div className="toggle" onClick={() =>toggleMenu()}></div>
        <div className="user">
          <img src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user-image" />
        </div>
      </div>
    );
}

export default Topbar
