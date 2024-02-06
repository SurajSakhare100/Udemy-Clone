import React from 'react'

function Navbar() {
    return (
        <div className='w-full h-[60px] shadow-xl'>
            <nav className="w-full h-full py-2 bg-black text-white p-4">
                <ul className='w-full h-full flex flex-row items-center justify-between'>
                    <li className='md:hidden '><a href="">
                        <button className='w-full h-ful text-sm font-bold rounded-sm py-1 px-2 shadow-md'>S</button></a>
                    </li>
                    <li><a href="#">Udemy</a></li>
                    <li><a href="#">Categories</a></li>
                    <li className='lg:w-1/2 lg:h-3/4 '>
                        <input
                            className='w-full h-full rounded-2xl outline-none text-black px-3 text-sm shadow-lg'
                            type="text"
                            placeholder='Search for Anything' /></li>
                    <li><a href="#">Udemy Bussiness</a></li>
                    <li className='hidden'><a href="">
                        <button className='w-full h-ful text-sm font-bold rounded-sm py-1 px-2 shadow-md'>S</button></a>
                    </li>
                    <li><a href="#">Teach on Udemy</a></li>
                    <li><a href="">
                        <button className='w-full h-ful text-sm font-bold rounded-sm py-1 px-2 shadow-md'>S</button></a>
                    </li>
                    <li className='h-3/4'><a href="">
                        <button className='w-full h-full bg-white rounded-sm text-black font-bold py-1 px-2 shadow-md'>Log in</button></a>
                    </li>
                    <li className='h-3/4'><a href="">
                        <button className='w-full h-full bg-black border text-sm font-bold rounded-sm py-1 px-2 shadow-md'>Sign Up</button></a>
                    </li>
                    <li className='h-3/4'><a href="">
                        <button className='w-full h-full bg-white rounded-sm text-black font-bold py-1 px-2 shadow-md'>L</button></a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
