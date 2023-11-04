import React from "react";
import { GithubSVG, LinkedinSVG } from "../svg/SVG";

export default function Footer() {
  return (
    <div className="footer h-32 bg-gray-800">
      <div className="footer-container mx-auto flex h-full  w-[1024px] items-center justify-between">
        <div className="footer-copyright text-white ">
          <h3 className="">Copyright © 2023 all rights are reserved</h3>
        </div>
        <div className="footer-socials flex gap-4">
          <a
            className="bg-white"
            href="https://github.com/jlamar27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSVG />
          </a>
          <a
            href="https://www.linkedin.com/in/juanlamar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinSVG />
          </a>
        </div>
      </div>
    </div>
  );
}
