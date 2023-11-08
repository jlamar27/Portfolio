import React from "react";
import { GithubSVG, LinkedinSVG } from "../svg/SVG";
import { Icons } from "../Icons/Icons";

export default function Hero() {
  return (
    <section className="hero-screen" id="hero-screen" >
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-main ">
            <div className="hero-text">
              <h1 className="mb-4 text-6xl text-bold">Software Developer</h1>
              <p>
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
          <div className="tech-stack">
            <p>Tech Stack</p>
            <Icons />
          </div>
        </div>
      </div>
    </section>
  );
}
