import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="App">
        <div className="navTitle">
          <h1>Whacked <span id="titleColorChange">Workout</span></h1>
          <h3>Favorite exercises that target the right areas and that bring the burn</h3>
        </div>
        <ul className="navbar">
          <li>
            <NavLink to="/" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/traps" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Traps
            </NavLink>
          </li>
          <li>
            <NavLink to="/delts" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Delts
            </NavLink>
          </li>
          <li>
            <NavLink to="/lats" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Lats
            </NavLink>
          </li>
          <li>
            <NavLink to="/biceps" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Biceps
            </NavLink>
          </li>
          <li>
            <NavLink to="/triceps" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Triceps
            </NavLink>
          </li>
          <li>
            <NavLink to="/pecs" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Pecs
            </NavLink>
          </li>
          <li className="middleRow">
            <NavLink to="/abs" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Abs
            </NavLink>
          </li>
          <li className="middleRow">
            <NavLink to="/forearms" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Forearms
            </NavLink>
          </li>
          <li className="middleRow">
            <NavLink to="/glutes" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Glutes
            </NavLink>
          </li>
          <li className="middleRow">
            <NavLink to="/hamstrings" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Hamstrings
            </NavLink>
          </li>
          <li className="middleRow">
            <NavLink to="/adductors" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Leg Adductors
            </NavLink>
          </li>
          <li>
            <NavLink to="/abductors" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Leg Abductors
            </NavLink>
          </li>
          <li>
            <NavLink to="/quads" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Quads
            </NavLink>
          </li>
          <li>
            <NavLink to="/calves" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Calves
            </NavLink>
          </li>
          <li>
            <NavLink to="/cardio" activeStyle={{ color: 'rgb(192, 12, 12)'}} exact className="navbarLinks">
              Cardio
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}