import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="overflow-hidden bg-transparent  py-6 px-8 box-border max-w-max">
      <Link to = "/">
        <div className="flex flex-row items-center justify-start gap-2 max-w-max">
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
        </div>
      </Link>
    </div>
  )
}

export default Navbar