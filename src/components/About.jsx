import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Myself Shagun Maurya currently pursing my B.tech in Major - Mechanical Engineering Minor - Computer Science and Engineering at Delhi Technological University, New Delhi.I am a programmer, Full Stack Web developer, good problem solver and Cloud Enthusiast.
        </p>

        <br />

        <p className="text-3xl">
          Some of my Intership Experience 
        </p>
        <br />
        <p className="text-xl">
          Oasis InfoByte | Web Development Intern       (Feb 2023 - March 2023) 
        </p>
        <p className="">
          • Deloyed a Full Stack based pizza web app and using Firebase as a Database system.
        </p>
        <p>• Implemented payment Gateway using Stripe so that user will recieve payments online. </p>
        <br />
        <p className="text-xl">
          Future Ready Talent By Microsoft | Intern    (April 2022 - May 2022) 
        </p>
        <p className="">
         <p className="">
          • Implemented a fitness website named workout and depolyed using Microsoft Azure Cloud Service.
        </p>
        <p> • Worked on a real time azure cloud services.</p>
        </p>
      </div>
    </div>
  );
};

export default About;
