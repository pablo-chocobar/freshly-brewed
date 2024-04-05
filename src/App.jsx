import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import BackgroundAnimation from './components/Background'
import Header from './components/Header';
import './App.css'
import Timer from './components/TimerCard';
import ShowcaseCard from './components/ShowcaseCard';
import VectorText from './components/VectorText'


function App() {
  const [hide, setHide] = useState(true);

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
        {hide ?
          <div className='flex flex-col items-center'>
            <Header text="Launching New Module Soon!" subtext1="Exciting things are in the works! We're currently " spantext="Crafting a new feature" subtext2=" for you. Keep an eye out for updates – We're working to make it available soon!" component={<VectorText text="get ready for the reveal!"></VectorText>} ></Header>
            <Timer hours={0} minutes={0} seconds={10} setHide={setHide}></Timer>
          </div>
          :
          <ShowcaseCard></ShowcaseCard>}
      </div>
    </div>
  )
}

export default App


