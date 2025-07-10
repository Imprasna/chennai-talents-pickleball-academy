import React from "react";
import './About.css'

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
        <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-50 drop-shadow-[0px_3px_9px_#69696930] relative level-card">
          <h3 className="text-3xl font-semibold">Beginner</h3>
          <p className="text-xl font-normal">
            Transform from first-time player to confident
            competitor through expert guidance in dinking, paddle control, and
            court awareness.
          </p>
        </div>
        <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-50 drop-shadow-[0px_3px_9px_#69696930] relative level-card">
        <h3 className="text-3xl font-semibold">Intermediate</h3>
          <p className="text-xl font-normal">
            Perfect your baseline precision, master
            strategic volleys, and develop advanced court tactics while
            elevating your competitive edge through targeted drills and
            personalized coaching.
          </p>
        </div>
        <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-50 drop-shadow-[0px_3px_9px_#69696930] relative level-card">
        <h3 className="text-3xl font-semibold">Advanced</h3>
          <p className="text-xl font-normal">
            Perfect your precision spins, aggressive net play,
            and advanced court strategies while developing the tactical mastery
            needed to compete at championship levels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
