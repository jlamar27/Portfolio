import React, { useState } from "react";
import { MenuSVG } from "../svg/SVG";
import { useMenuContext } from "../context/openNabar";



export default function Navbar() {
  const {toggleMenuIsClicked} =useMenuContext()

  const scrollToDiv = (
    event: React.MouseEvent<HTMLAnchorElement>,
    divId: string
  ) => {
    event.preventDefault();
    const div = document.getElementById(divId);
    if (div) {
      div.scrollIntoView({
        behavior: "smooth",
      });
      toggleMenuIsClicked()
    }
  };

  

  return (
    <div className="nav">
      <div className="nav-container">
        <span className="">Juan Lamar</span>
        <ul className="font-semibold flex">
          <a
            className="m-2"
            href="Home"
            onClick={(e) => scrollToDiv(e, "hero-screen")}
          >
            Home
          </a>
          <a
            className="m-2"
            href="About"
            onClick={(e) => scrollToDiv(e, "about-screen")}
          >
            About
          </a>
          <a
            className="m-2"
            href="Projects"
            onClick={(e) => scrollToDiv(e, "project-screen")}
          >
            Projects
          </a>
          <a
            className="m-2"
            href="Contact"
            onClick={(e) => scrollToDiv(e, "contact-screen")}
          >
            Contact
          </a>
          <span 
          onClick={toggleMenuIsClicked}
          className="menu-svg"
          >
            <MenuSVG />
          </span>
        </ul>
      </div>
    </div>
  );
}
