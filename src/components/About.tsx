import React from 'react'

export default function About() {
  return (
    <div className='about-container mx-20 py-24'>
      <section className='about-content grid grid-cols-2'>
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
