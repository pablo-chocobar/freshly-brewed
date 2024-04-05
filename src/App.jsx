import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import BackgroundAnimation from './components/Background'
import './App.css'
import Launch from './pages/Launch';
import { Routes , Route } from 'react-router-dom';
import Project from './pages/Project';


function App() {
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
      <Routes>
        <Route path = "/" element = {<Launch/>} />
        <Route path = "/Project" element = {<Project/>} />
      </Routes>
      {/* <Navbar></Navbar> */}
      <div className='relative w-full h-full z-0'>
        <BackgroundAnimation></BackgroundAnimation>
      </div>
    </div>
  )
}

export default App


