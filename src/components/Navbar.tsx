import React from "react";

export default function Navbar() {
  const scrollToDiv = (
    event: React.MouseEvent<HTMLAnchorElement>,
    divId: string,
  ) => {
    event.preventDefault();
    const div = document.getElementById(divId);;
    if (div) {
      div.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 z-10 flex h-20 items-center justify-between bg-white shadow-md">
      <span className="mx-10">Juan Lamar</span>
      <div className="links mx-10 font-semibold">
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
      </div>
    </div>
  );
}
