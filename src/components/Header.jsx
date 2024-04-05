import React from 'react'
function Header(props) {
  return (
    <div className='flex flex-col justify-center w-3/4 text-center mx-auto items-center text-wrap'>
        <p className = "pt-4 text-6xl tracking-tight leading-none font-poppins font-semibold px-10">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-300'>{props.text}</span>
        </p>

        <p className = "pt-4 tracking-tight text-2xl font-poppins font-normal text-stone-300 lg:text-3xl px-16 sm:px-4 ">
        {props.subtext1}<span className='font-semibold text-white'>{props.spantext}</span>{props.subtext2}</p>
        {props.component}
    </div>
  )
}

export default Header

