import React , {useEffect} from 'react'
import PlatformNavbar from "../components/PlatformNavbar"

function Project(props) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", props.theme);
}, []);
  return (
    <div className='flex flex-col absolute inset-0 z-20'>
      <PlatformNavbar></PlatformNavbar>
      <div className='absolute bottom-2 right-2'>
        <button type="button" class="text-background bg-floating font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2">
          <svg class="w-4 h-4" transform='rotate(270)' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
          <span class="sr-only">Icon description</span>
        </button>
      </div>
    </div>
  )
}

export default Project
