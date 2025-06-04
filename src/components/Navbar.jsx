import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md p-4 flex justify-between items-center'>
    <div className='text-xl font-bold text-blue-600'>
      Eventify
    </div>
    <ul className='flex space-x-6 text-gray-700'>
    <li><a href='#home'>Home</a></li>
    <li><a href='#events'>Events</a></li>
    <li><a href='#contact'>Contact</a></li>
    </ul>
   </nav>
  )
}

export default Navbar