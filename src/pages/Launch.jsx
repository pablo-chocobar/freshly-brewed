import React, { useState } from 'react';
import Header from '../components/Header';
import Timer from '../components/TimerCard';
import ShowcaseCard from '../components/ShowcaseCard';
import VectorText from '../components/VectorText'
import Form from '../components/Form';

function Launch() {
    const [hide, setHide] = useState(true);
  return (
    <div className='absolute inset-0 flex justify-center items-center z-20'>
    {hide ?
      <div className='flex flex-col items-center'>
        <Header text="Launching New Module Soon!" subtext1="Exciting things are in the works! We're currently " spantext="Crafting a new feature" subtext2=" for you. Keep an eye out for updates – We're working to make it available soon!" component={<VectorText text="get ready for the reveal!"></VectorText>} ></Header>
        <Timer hours={5} minutes={0} seconds={10} setHide={setHide}></Timer>
        <Form></Form>
      </div>
      :
      <ShowcaseCard></ShowcaseCard>}

  </div>  )
}

export default Launch