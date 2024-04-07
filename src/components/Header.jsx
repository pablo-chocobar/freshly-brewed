import React, { useState, useEffect } from 'react'
import Rocket from './Rocket'
function Header(props) {

  const [screenX, setScreenX] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenX(window.innerWidth);
      console.log(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='flex flex-col justify-center w-3/4 text-center mx-auto items-center text-wrap'>
      {(screenX > 720)
        ?
        <div>
          <p className="text-6xl tracking-tight leading-none font-poppins font-semibold">
          <Rocket theme = {props.theme} screenx = {screenX}></Rocket>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-content1 to-content2'>{props.text}</span>
          </p>
        </div>
        :
        <div className>
          <p className="text-3xl tracking-tight leading-none font-poppins font-semibold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-content1 to-content2'>{props.text}</span>
            <Rocket theme = {props.theme}  screenx = {screenX}></Rocket> 
          </p>
          
          </div>
      }
      <p className="pt-4 tracking-tight text-lg font-poppins font-normal text-content2 lg:text-3xl px-16 sm:px-4 ">
        {props.subtext1}<span className='font-semibold text-content1'>{props.spantext}</span>{props.subtext2}</p>
      {props.component}
    </div >
  )
}

export default Header

