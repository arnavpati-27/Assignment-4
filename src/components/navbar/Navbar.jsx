import { NavBarItem } from "./NavBarItem"

import { Link, NavLink } from "react-router-dom"

import './Navbar.css'
export function Navbar() {

    return (
      <div className="navbar">
        <div className="navbar-logo"><Link to="/"><li>Foods.com</li></Link></div>
        <div className="navbar-menu">
          <ul className="navbar-menu-list">
          <NavLink className={(e)=> {return e.isActive ? "highlight nav-element":"nav-element"}}  to="/about"><li>Recipes</li></NavLink>
          <NavLink className={(e)=> {return e.isActive ? "highlight nav-element":"nav-element"}} to="/contact"><li>Contacts</li></NavLink>
          <NavLink className={(e)=> {return e.isActive ? "highlight nav-element":"nav-element"}} to="/services"><li>Services</li></NavLink>
          </ul>
        </div>
      </div>
    )
}