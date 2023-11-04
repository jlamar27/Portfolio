import React from 'react';

export default function Navbar() {
  const scrollToDiv = (event: React.MouseEvent<HTMLAnchorElement>, divId: string) => {
    event.preventDefault();
    const div = document.getElementById(divId);
    console.log(div)
    if (div) {
      div.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white flex sticky top-0 h-20 items-center shadow-md z-10 justify-between">
      <span className='mx-10'>Juan Lamar</span>
      <div className='links font-semibold mx-10'>
        <a className='m-2' href="#hero-screen" onClick={(e) => scrollToDiv(e, 'hero-screen')}>Home</a>
        <a className='m-2' href="" onClick={(e) => scrollToDiv(e, 'about-screen')}>About</a>
        <a className='m-2' href="" onClick={(e) => scrollToDiv(e, 'project-screen')}>Projects</a>
        <a className='m-2' href="" onClick={(e) => scrollToDiv(e, 'contact-screen')}>Contact</a>
      </div>
    </div>
  );
}
