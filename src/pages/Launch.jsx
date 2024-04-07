import React, { useState } from 'react';
import Header from '../components/Header';
import Timer from '../components/TimerCard';
import ShowcaseCard from '../components/ShowcaseCard';
import VectorText from '../components/VectorText'
import Form from '../components/Form';

function Launch() {
    const [hide, setHide] = useState(true);
    const targetDate = "2024-04-07T12:00:00Z" //in GMT (IST minus 5:30)

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
    <div className='absolute inset-0 flex justify-center items-center z-20'>
    {hide ?
      <div className='flex flex-col items-center'>
        <Header text="Launching New Module Soon!" subtext1="Exciting things are in the works! We're currently " spantext="Crafting a new feature" subtext2=" for you. Keep an eye out for updates – We're working to make it available soon!" component={<VectorText text="get ready for the reveal!"></VectorText>} ></Header>
        <Timer days = {days} hours={hours} minutes={minutes} seconds={seconds}  targetDate = {targetDate}  setHide={setHide}></Timer>
        <Form></Form>
      </div>
      :
      <ShowcaseCard></ShowcaseCard>}

  </div>  )
}

export default Launch