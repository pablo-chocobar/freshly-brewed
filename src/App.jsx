import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import BackgroundAnimation from './components/Background'
import Header from './components/Header';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   const animateBlobs = () => {
  //     let classlist = document.body.classList
  //     if (classlist.contains("bg-gradient-to-br")){
  //       classlist.remove("bg-gradient-to-br");
  //       classlist.add("bg-gradient-to-tl");
  //     }

  //     if (classlist.contains("bg-gradient-to-tl")){
  //       classlist.remove("bg-gradient-to-tl");
  //       classlist.add("bg-gradient-to-tr");
  //     }

  //     if (classlist.contains("bg-gradient-to-tr")){
  //       classlist.remove("bg-gradient-to-tr");
  //       classlist.add("bg-gradient-to-bl");
  //     }

  //     if (classlist.contains("bg-gradient-to-bl")){
  //       classlist.remove("bg-gradient-to-bl");
  //       classlist.add("bg-gradient-to-br");
  //     }

  //   };

  //   const intervalId = setInterval(animateBlobs, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div className='w-full'>
    {/* <Navbar></Navbar> */}
      <div className='relative w-full h-full z-0'>
        <BackgroundAnimation></BackgroundAnimation>
      </div>
      <div className='absolute inset-0 flex justify-center items-center z-20'>
        <Header subtext = "Exciting things are in the works! We're currently Crafting a new feature for you. Keep an eye out for updates – We're working to make it available soon!"></Header>
      </div>
    </div>
  )
}

export default App


