import React from 'react'

function VectorText(props) {
  return (
    <div>
        <p className='text-2xl my-12 uppercase tracking-widest font-black text-transparent bg-clip-text bg-gradient-to-r from-[#b2b2b2] to-[#808080]'>
            {props.text}
        </p>
    </div>
  )
}

export default VectorText