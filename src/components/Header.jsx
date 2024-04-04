import React from 'react'

function Header(props) {
  return (
    <div className='flex flex-col justify-center mx-auto items-center text-center'>
        <p className = "pt-4 text-6xl tracking-tight leading-none font-poppins font-semibold px-10">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-300'>Launching New Module Soon!</span>
        </p>

        <p className = "pt-4 text-2xl font-poppins font-normal text-stone-300 lg:text-3xl sm:px-16 lg:px-48 ">
        Exciting things are in the works! We're currently <span className='font-semibold text-white'>Crafting a new feature</span> for you. Keep an eye out for updates – We're working to make it available soon!        </p>
    </div>
  )
}

export default Header

