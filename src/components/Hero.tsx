import React from 'react';
import { GithubSVG, LinkedinSVG } from '../svg/SVG';

export default function Hero() {
    return (
        <div className='hero bg-neutral-50 h-screen flex flex-col items-center justify-center gap-10  '>
            <div className='hero-text-image-container h-2/4 flex flex-row items-center justify-center gap-x-40 mx-40' >
                <div className='hero-text flex flex-col flex-grow  justify-center max-w-3xl'>
                    <h1 className='text-7xl flex-wrap my-5 '>Front-End React Developer</h1>
                    <p className='text-lg font-light my-5'>Hi, I'm Juan Lamar. A passionate Front-end React Developer.</p>
                    <div className='flex gap-3'>
                        <a href="https://github.com/jlamar27" target="_blank" rel="noopener noreferrer">
                            <GithubSVG />
                        </a>
                        <a href="https://www.linkedin.com/in/juanlamar" target="_blank" rel="noopener noreferrer">
                            <LinkedinSVG />
                        </a>
                    </div>
                </div>

                <div className='hero-image flex'>
                    <img
                        src="/headshot.jpeg"
                        alt="headshot"
                        className='h-1/2 rounded-md h-60 w-60 border-gray-400'
                    />
                </div>
            </div>

            <div className=' tech-stack items-center justify-center flex gap-40 '>
                <p>Tech Stack</p>
                <ul className='flex gap-3'>
                    <li>
                        <img src="https://skillicons.dev/icons?i=html,css" alt="icons" />
                    </li>
                    <li>
                        <img src="https://skillicons.dev/icons?i=js,ts" alt="icons" />
                    </li>
                    <li>
                        <img src="https://skillicons.dev/icons?i=react,tailwind" alt="icons" />
                    </li>
                </ul>
            </div>
        </div>
    );
}