import React from 'react'
import { Logo } from "../assets/index";
import { NavLink, useNavigate } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";

const Header = () => {

  return (
    <header className='flex items-center justify-between w-full p-4 md:py-2 md:px-6'>
      {/* if we click the logo we get to the home page */}
      <NavLink to={"/"}>
        <img src={Logo} alt="Logo" className="w-16 rounded-full" />

      </NavLink>
      <ul className='flex items-center justify-between  w-[66%] md:w-[50%]'>
        {/* is active is an object comming from navlink */}
        {/* if isActive is true then then we impiment active style */}
        <li className="mx-5 text-lg"><NavLink to={'/home'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Home</NavLink></li>
        <li className="mx-5 text-lg"><NavLink to={'/Best Picks'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Best Picks</NavLink></li>
        <li className="mx-5 text-lg"><NavLink to={'/premium'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Premium</NavLink></li>
        <li className="mx-5 text-lg"><NavLink to={'/contact'} className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles}>Contact</NavLink></li>

      </ul>
      <img src={""} alt="Profile" className="w-16 rounded-md" />

    </header>

  )
}

export default Header