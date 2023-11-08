import React from "react";

export default function About() {
  return (
    <div className="about-screen bg-white" id="about-screen">
      <div className="about-container mx-auto h-full py-32">
        <section className="about-content flex flex-shrink gap-16 align-middle ">
          <div className="about-image">
            <img
              className="h-[35] w-[41] rounded-3xl"
              src="/about-image.webp"
              alt="about image"
            />
          </div>
          <div className="about-text">
            <h3 className="text-lg font-bold uppercase text-blue-500 ">
              About me
            </h3>
            <h4 className="my-4 text-2xl font-bold">A dedicated Developer</h4>
            <p className="font-thin text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              necessitatibus quo sapiente. Doloribus amet illo qui mollitia
              rerum odit debitis eveniet cumque libero est, quod commodi odio
              ipsam tempora eos.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
