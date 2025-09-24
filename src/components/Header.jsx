import React from "react";


import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'

const Header = () => {
  return (
    <div className="flex justify-between items-center h-25 ">
        <div
         className="pl-10">
            <img src={logo} height={100} width={100} alt="Jarurat Care Logo"/>
        </div>
        <nav>
            <ul className="flex gap-5 pr-10 text-2xl">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/patient">Patient</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
           </ul>
        </nav>
    </div>
  )
}

export default Header
