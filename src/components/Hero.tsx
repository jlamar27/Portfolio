import React from 'react'
import { GithubSVG, LinkedinSVG } from '../svg/SVG';


export default function Hero() {
  return (
    <div className='flex-auto bg-neutral-50 ' >
        <h1>
            Front-end React Developer
        </h1>
        <p>
            Hi, I'm Juan Lamar. A passionate Front-end React Developer.
        </p>
        <a href="https://github.com/jlamar27" target="_blank" rel="noopener noreferrer">
            <GithubSVG />
        </a>
        <a href="http://https://www.linkedin.com/in/juanlamar/" target="_blank" rel="noopener noreferrer">
            <LinkedinSVG />
        </a>
    </div>
  )
}
