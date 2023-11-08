import React from "react";
import { XIcon } from "../svg/SVG";
import { useMenuContext } from "../context/openNabar";

export default function MobileNavbar() {
  const {menuIsClicked, toggleMenuIsClicked} = useMenuContext()

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
    }
  };

  return (
    <div className={menuIsClicked ? 'mobile-nav open-menu': 'mobile-nav closed-menu'}>
      <span 
      className="w-1/12 cursor-pointer absolute top-8 right-8"
      onClick={toggleMenuIsClicked}
      >
        <XIcon />
      </span>
      
      <ul className="flex flex-col gap-8 text-[2.3rem]  ">
        <li>
          <a
            className="m-2"
            href="Home"
            onClick={(e) => scrollToDiv(e, "hero-screen")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="m-2"
            href="About"
            onClick={(e) => scrollToDiv(e, "about-screen")}
          >
            About
          </a>
        </li>
        <li>
          <a
            className="m-2"
            href="Projects"
            onClick={(e) => scrollToDiv(e, "project-screen")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="m-2"
            href="Contact"
            onClick={(e) => scrollToDiv(e, "contact-screen")}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
