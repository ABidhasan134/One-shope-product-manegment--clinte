import React from 'react'
import ButtonStyle from './navbar/buttonStyle'
import { Link, NavLink } from 'react-router-dom'
import LogInBtn from './navbar/logInBtn'

const NavBar = () => {
    const link=<>
        <NavLink to="/">
        <ButtonStyle Text="Home"></ButtonStyle></NavLink>
        <NavLink to="/productList"><ButtonStyle Text="Product List"></ButtonStyle></NavLink>
        <NavLink to="/About"><ButtonStyle Text="About"></ButtonStyle></NavLink>
      </>
  return (
    <div>
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">One Shope</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login"><LogInBtn text="Log In"></LogInBtn></Link>
  </div>
</div>
    </div>
  )
}

export default NavBar
