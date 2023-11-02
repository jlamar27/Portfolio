import React from 'react';
import { GithubSVG, LinkedinSVG } from '../svg/SVG';
import { Icons } from '../Icons/Icons';

export default function Hero() {
    return (
        <section className='hero-screen h-screen -mt-16' id='hero-screen'>
            <div className='hero-container mx-auto '>
                <div className='hero-content flex flex-col items-center justify-center
                gap-y-12 gap-x-40 mx-52 pt-36' >
                    <div className='hero-main flex gap-40 justify-center items-center'>
                        <div className='hero-text flex flex-col max-w-3xl'>
                            <h1 className='text-8xl text-bold'>Front-End React Developer</h1>
                            <p className='text-lg text-light my-5 '>Hi, I'm Juan Lamar. A passionate Front-end React Developer.</p>
                            <span className='flex gap-3'>
                                <a href="https://github.com/jlamar27" target="_blank" rel="noopener noreferrer">
                                    <GithubSVG />
                                </a>
                                <a href="https://www.linkedin.com/in/juanlamar" target="_blank" rel="noopener noreferrer">
                                    <LinkedinSVG />
                                </a>
                            </span>
                        </div>
                        <div className='hero-image'>
                            <img
                                src="/headshot.jpeg"
                                alt="headshot"
                                className=' h-[30rem] w-[30rem] rounded-md'
                            />
                        </div>
                    </div>
                    <div className='tech-stack items-center flex mx-40 w-full justify-start m-0   '>
                        <p className='border-r-2 pr-6 mr-12'>Tech Stack</p>
                        <Icons />
                    </div>
                </div>
            </div>
        </section>
    );
}