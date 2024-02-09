import React from 'react'
import { Link,NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='w-full h-[60px] shadow-xl'>
            <nav className="w-full h-full py-2 bg-black text-white p-4">
                <ul className='w-full h-full flex flex-row items-center justify-between'>
                    {/* <li className='md:hidden '>
                        <NavLink to='/s'>
                        <button className='w-full h-ful text-sm font-bold rounded-sm py-1 px-2 shadow-md'>S</button>
                        </NavLink>
                    </li> */}
                    <li><NavLink to="/">Udemy</NavLink></li>
                    <li><NavLink to="/categories">Categories :</NavLink></li>
                    <li className='lg:w-1/2 lg:h-3/4 '>
                        <input
                            className='w-full h-full rounded-2xl outline-none text-black px-3 text-sm shadow-lg'
                            type="text"
                            placeholder='Search for Anything' /></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li className=''><NavLink to="/productpage">
                        <button className='w-full h-ful text-sm font-bold rounded-sm py-1 px-2 shadow-md'>PP</button></NavLink>
                    </li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li><NavLink to="/#">
                        <button className='w-full h-ful text-sm font-bold rounded-sm py-1 px-2 shadow-md'></button></NavLink>
                    </li>
                    <li className='h-3/4'>
                        <NavLink to="/login">
                        <button className='w-full h-full bg-white rounded-sm text-black font-bold py-1 px-2 shadow-md'>Log in</button></NavLink>
                    </li>
                    <li className='h-3/4'><NavLink to="/signup">
                        <button className='w-full h-full bg-black border text-sm font-bold rounded-sm py-1 px-2 shadow-md'>Sign Up</button></NavLink>
                    </li>

                </ul>
                {/* <NavLink to='/'>home</NavLink>
                <NavLink to='/categories'>Categories</NavLink>
                <NavLink to='/about'>about</NavLink>
                <NavLink to='/contact'>Contact</NavLink> */}
            </nav>
        </div>
    )
}

export default Navbar
