import React from 'react';
import { GithubSVG, LinkedinSVG } from '../svg/SVG';
import { Icons } from '../Icons/Icons';

export default function Hero() {
    return (
        <section className='hero-screen h-screen -mt-16' id='hero-screen'>
            <div className='hero-container w-[1024px] mx-auto pt-[200px] '>
                <div className='hero-content flex flex-col  gap-y-12 pt-36' >
                    <div className='hero-main flex gap-40'>
                        <div className='hero-text flex flex-col max-w-3xl'>
                            <h1 className='text-6xl text-bold'>Software Developer</h1>
                            <p className='text-lg text-light my-5 '>Hi, I'm Juan Lamar. A passionate Software Developer.</p>
                            <span className='flex gap-3'>
                                <a href="https://github.com/jlamar27" target="_blank" rel="noopener noreferrer">
                                    <GithubSVG />
                                </a>
                                <a href="https://www.linkedin.com/in/juanlamar" target="_blank" rel="noopener noreferrer">
                                    <LinkedinSVG />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className='tech-stack items-center flex justify-start'>
                        <p className='border-r-2 pr-6 mr-12'>Tech Stack</p>
                        <Icons />
                    </div>
                </div>
            </div>
        </section>
    );
}