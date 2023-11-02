import React from 'react'

export default function Navbar() {
  return (
      <div className="bg-white flex justify-end sticky top-0  h-20  items-center font-semibold shadow-md z-10 " >
          <div className='links mr-5 '>
            <a className='m-2' href="">Home</a>
            <a className='m-2'href="">About</a>
            <a className='m-2'href="">Projects</a>
            <a className='m-2'href="">Contact</a>
          </div>
      </div>
  )
}
