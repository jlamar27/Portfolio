import React from "react";
import { GithubSVG, LinkedinSVG } from "../svg/SVG";
import { Icons } from "../Icons/Icons";

export default function Hero() {
  return (
    <section className="hero-screen -mt-16 h-screen" id="hero-screen">
      <div className="hero-container mx-auto w-[1024px] pt-[200px] ">
        <div className="hero-content flex flex-col  gap-y-12 pt-36">
          <div className="hero-main flex gap-40">
            <div className="hero-text flex max-w-3xl flex-col">
              <h1 className="text-6xl text-bold">Software Developer</h1>
              <p className="my-5 text-lg text-light ">
                Hi, I'm Juan Lamar. A passionate Software Developer.
              </p>
              <span className="flex gap-3">
                <a
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
              </span>
            </div>
          </div>
          <div className="tech-stack flex items-center justify-start">
            <p className="mr-12 border-r-2 pr-6">Tech Stack</p>
            <Icons />
          </div>
        </div>
      </div>
    </section>
  );
}
