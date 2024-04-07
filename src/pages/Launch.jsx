import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Timer from '../components/TimerCard';
import ShowcaseCard from '../components/ShowcaseCard';
import VectorText from '../components/VectorText'
import Form from '../components/Form';
import Navbar from '../components/Navbar'
import BackgroundAnimation from '../components/Background';

import { useLocation } from 'react-router-dom';
import confetti from "../assets/confetti.gif";

function Launch(props) {

  let { state } = useLocation();

  const [hide, setHide] = useState(true);
  const targetDate = (state.timer == "high") ? '2024-04-17T03:24:00' : new Date().setSeconds(new Date().getSeconds() + 4);  //in GMT (IST minus 5:30)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", props.theme);
  }, []);

  const getCountDownTimeFromTimeDiff = (timeDiff) => {
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const timeDiff = new Date(targetDate).getTime() - new Date().getTime();
  const { days, hours, minutes, seconds } = getCountDownTimeFromTimeDiff(timeDiff);

  return (
    <div className='w-full'>

      <div className='flex flex-col absolute inset-0 z-20'>
        <Navbar></Navbar>

        <div className='flex justify-center items-center z-20'>
          {hide ?
            <div className='flex flex-col items-center'>
              <Header theme={props.theme} text="Launching New Module Soon!" subtext1="Exciting things are in the works! We're currently " spantext="Crafting a new feature" subtext2=" for you. Keep an eye out for updates – We're working to make it available soon!" component={<VectorText text="get ready for the reveal!"></VectorText>} ></Header>
              {state.timer != "none" && <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} targetDate={targetDate} setHide={setHide}></Timer>}
              <Form></Form>
            </div>
            :
            <div className='w-full flex flex-row overflow-clip justify-center'>
              <div className='relative'>
                <img className = "z-10 w-full max-h-screen" src = {confetti}/>
                <div className = "absolute top-1/4 -right-1/4">
                  <ShowcaseCard theme={props.theme} ></ShowcaseCard>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className='relative w-full h-full z-0'>
        <BackgroundAnimation></BackgroundAnimation>
      </div>
    </div>
  )
}

export default Launch