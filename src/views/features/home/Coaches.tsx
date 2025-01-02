import React from "react";
import { UserGroupIcon } from '@heroicons/react/24/outline'

const Coaches: React.FC = () => {
  return (
    <div id="coach">
      <div className="container p-6 py-20 mx-auto rounded lg:px-8 dark:bg-gray-50">
        <h2 className="text-5xl font-bold text-center">
          Our team is here to help you.
        </h2>
        <div className="flex justify-center p-4">
          <a rel="noopener noreferrer" className="flex gap-3 w-100" href="/team">
            <UserGroupIcon className="size-6" /> Meet our Team
          </a>
        </div>
        <img
          src="https://source.unsplash.com/random/360x240"
          alt=""
          className="object-cover w-full h-auto mt-8 rounded max-h-96 dark:bg-gray-500"
        />
      </div>
    </div>
  );
};

export default Coaches;
