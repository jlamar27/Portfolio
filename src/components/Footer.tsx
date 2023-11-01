import React from 'react'
import { GithubSVG, LinkedinSVG } from '../svg/SVG';


export default function Footer() {
  return (
    <div className='footer bg-gray-800'>
      <div className='footer-container flex items-center justify-center'>
        <div className='footer-copyright text-white '>
          <h3 className=''>
            Copyright © 2023 all rights are reserved
          </h3>
        </div>
        <div className='footer-socials'>
          <a href="https://github.com/jlamar27" target="_blank" rel="noopener noreferrer">
            <GithubSVG />
          </a>
          <a href="https://www.linkedin.com/in/juanlamar" target="_blank" rel="noopener noreferrer">
            <LinkedinSVG />
          </a>

        </div>

      </div>





    </div>
  )
}
