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
    <div className="bg-white flex justify-end sticky top-0 h-20 items-center font-semibold shadow-md z-10">
      <div className='links mr-5'>
        <a className='m-2' href="#hero-screen" onClick={(e) => scrollToDiv(e, 'hero-screen')}>Home</a>
        <a className='m-2' href="" onClick={(e) => scrollToDiv(e, 'about-screen')}>About</a>
        <a className='m-2' href="" onClick={(e) => scrollToDiv(e, 'project-screen')}>Projects</a>
        <a className='m-2' href="" onClick={(e) => scrollToDiv(e, 'contact-screen')}>Contact</a>
      </div>
    </div>
  );
}
