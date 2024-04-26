import React from "react";
import "./css/component.css";
const Admin = () => {
  return (
    <>
     <div class="sidebar">
      <div class="logo"></div>
      <ul class="menu">
        <li class="active">
          <a href="#">
            <i class="fas fa-tasks"></i>
            <span>DashBoard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-user"></i>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-chart-bar"></i>
            <span>Statistic</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-tasks"></i>
            <span>Link4</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fas fa-chart-bar"></i>
            <span>Link5</span>
          </a>
        </li>
        <li class="logout">
          <a href="#">
            <i class="fas fa-chart-bar"></i>
            <span>Link5</span>
          </a>
        </li>
      </ul>
    </div>
    </>
  );
};
export default Admin;
