import React from "react";
// import "./css/NavBar.css";
import './css/component.css';
export const NavBar = () => {
  return (
    <>
      <div class="main--content">
        <div class="header--wrapper">
          <div class="header--title">
            <span>Primary</span>
            <h2>Dashboard</h2>
          </div>
          <div class="user--info">
            <div class="search--box">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
            <img src="" alt="Loading" />
          </div>
        </div>
      </div>
    </>
  );
};
