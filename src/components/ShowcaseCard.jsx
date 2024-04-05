import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ShowcaseCard() {

    const navigate = useNavigate();

    function CTAonclick(e) {
        e.preventDefault();
        navigate("/Project");
    }

    useEffect(() => {
        setTimeout(() => {
            navigate("/Project");
        } , 3000)
    } , [])


    return (
        <div className='flex rounded-3xl min-w-max max-w-[80%] flex-col bg-gradient-to-r from-primary to-secondary'>
            <div className='flex flex-col justify-center text-center mx-8 items-center max-w-[570px] pt-8'>
                <p className="text-2xl tracking-tightest leading-none font-poppins font-semibold  sm:text-6xl">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-300'>We are Live Now!</span>
                </p>

                <p className="mt-4 tracking-tightest text-xs font-poppins font-normal text-stone-300 sm:text-2xl px-4 sm:px-0">
                    Our new feature is now<span className='font-semibold text-white'> Live and ready </span>for you to explore. Go ahead and give it a try</p>
                <button onClick={CTAonclick} className='rounded-lg my-10 bg-white text-[#0F0F0F] max-w-max font-poppins text-3xl  leading-8 font-medium px-5 py-3'>
                    Get Started
                </button>
            </div>

        </div>
    )
}

export default ShowcaseCard

