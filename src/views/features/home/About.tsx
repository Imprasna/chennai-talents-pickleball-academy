import React from "react";

const About: React.FC = () => {
  return (
    <div id="about-us">
      <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center dark:text-violet-600">
        How it works
      </span>
      <h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">
        Mastering the Court
      </h2>
      <div className="grid gap-6 my-16 lg:grid-cols-3">
        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 drop-shadow-[5px_9px_7px_#696969]">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
            1
          </div>
          <p className="text-xl font-normal">
            <b>Beginner.</b>Transform from first-time player to confident
            competitor through expert guidance in dinking, paddle control, and
            court awareness.
          </p>
        </div>
        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 drop-shadow-[5px_9px_7px_#696969]">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
            2
          </div>
          <p className="text-xl font-normal">
            <b>Intermediate.</b>Perfect your baseline precision, master
            strategic volleys, and develop advanced court tactics while
            elevating your competitive edge through targeted drills and
            personalized coaching.
          </p>
        </div>
        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50 drop-shadow-[5px_9px_7px_#696969]">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
            3
          </div>
          <p className="text-xl font-normal">
            <b>Advanced.</b>Perfect your precision spins, aggressive net play,
            and advanced court strategies while developing the tactical mastery
            needed to compete at championship levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
