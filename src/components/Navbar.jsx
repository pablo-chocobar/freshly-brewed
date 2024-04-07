import React from 'react'

function Navbar() {
  return (
    <div className="overflow-hidden bg-transparent flex flex-row items-center justify-start py-6 px-8 box-border gap-2">
      <div className="tracking-tight leading-3 font-semibold text-content1">
        THE
      </div>
      <div className="bg-content1 flex flex-row items-center justify-center py-1 px-1 text-background">
        <div className="tracking-tight leading-3 font-semibold">
          PRODUCT
        </div>
      </div>
      <div className="tracking-tight leading-3 font-semibold text-content1">
        PLATFORM
      </div>
    </div>)
}

export default Navbar