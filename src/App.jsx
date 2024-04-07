import React, { useState, useEffect } from 'react';
import './App.css'
import Launch from './pages/Launch';
import { Routes , Route } from 'react-router-dom';
import Project from './pages/Project';
import Home from './pages/Home';


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
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/launchdark" element = {<Launch theme = "dark"/>} />
        <Route path = "/launchlight" element = {<Launch theme = "light"/>} />
        <Route path = "/Projectdark" element = {<Project theme = "dark" />} />
        <Route path = "/Projectlight" element = {<Project theme = "light" />} />

      </Routes>
  )
}

export default App


