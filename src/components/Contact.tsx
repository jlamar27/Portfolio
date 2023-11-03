import React from 'react'
import { MailSVG } from '../svg/SVG'

export default function Contact() {
  return (
    <div className='contact-screen bg-white h-[400px]' id='contact-screen'>
      <div className='contact-container mx-auto w-[1024px] h-full items-center py-[104px] '>
        <div className='call-to-action my-5'>
          <h3 className='uppercase font-bold text-lg text-blue-500'> Contact</h3>
          <h3 className='font-bold'>Feel free to reach out</h3>
        </div>
        <a className='mailtoui flex' href="mailto:juanlamar.tech@gmail.com?subject=Inquiry" >
          <MailSVG />
          Send Inquiry
          </a>
      </div>

    </div>
  )
}
