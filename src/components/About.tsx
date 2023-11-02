import React from 'react'

export default function About() {
  return (
    <div className='about-container py-32 bg-white'>
      <section className='about-content flex gap-8 mx-10 '>
        <div className='about-image'>
          <img src="/about-image.webp" alt="about image" />
        </div>
        <div className='about-text'>
          <h3 className='uppercase font-bold text-lg text-blue-500 my-4'>About me</h3>
          <h4 className='font-bold my-4 text-2xl'>A dedicated Developer</h4>
          <p className='font-thin text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste necessitatibus quo sapiente. Doloribus amet illo qui mollitia rerum odit debitis eveniet cumque libero est, quod commodi odio ipsam tempora eos.</p>
        </div>
      </section>
    </div>
  )
}
