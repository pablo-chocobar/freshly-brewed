import React from 'react'

function VectorText(props) {
  return (
    <div className='bg-content1 bg-clip-text'>
        <p className='text-2xl my-12 uppercase tracking-widest font-black text-transparent bg-clip-text bg-gradient-to-r from-cstone to-czinc'>
            {props.text}
        </p>
    </div>
  )
}

export default VectorText