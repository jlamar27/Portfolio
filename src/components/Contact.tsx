import React from 'react'
import { MailSVG } from '../svg/SVG'

export default function Contact() {
  return (
    <div className='p-4 justify-center'>
      <h3 className='uppercase font-bold text-lg text-blue-500 my-4'> Contact</h3>
      <h3 className='font-bold'>Feel free to reach out</h3>
      <a href="mailto:juanlamar.tech@gmail.com.com?">Send Inquiry</a>
      <MailSVG />

    </div>
  )
}
