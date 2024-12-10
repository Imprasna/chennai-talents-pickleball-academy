import React, { useState } from "react";
import { Card } from "../../components/Card";
import { CardContent } from "../../components/CardContent";
import Navbar from "../../components/Navbar";
import Footer from "../home/Footer";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  TrophyIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import { coachData } from "../../../constants/teamData";

const Team = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  const renderTabContent = (coachData: any, activeTab: string): JSX.Element | null => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-4 h-[40vh] overflow-y-scroll overflow-auto scrollbar-hide">
            <p className="text-md leading-6">{coachData.about}</p>
          </div>
        );
      case "achievements":
        return (
          <div className="space-y-4 h-[40vh] overflow-y-scroll overflow-auto scrollbar-hide">
            <ul className="list-disc pl-5">
              {coachData.achievementsAndExperience.map(
                (achievement: string, index: number) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-yellow-300 text-black rounded-full text-sm mb-3 list-none flex items-start gap-2"
                  >
                    <TrophyIcon className="w-4 h-4 text-gray-500" />
                    {achievement}
                  </li>
                )
              )}
            </ul>
          </div>
        );
      case "contact":
        return (
          <div className="space-y-4 h-[40vh] overflow-y-scroll overflow-auto scrollbar-hide">
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4 text-gray-500" />
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm tracking-[.7px]">
                {coachData.contact.email}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-gray-500" />
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm tracking-[.7px]">
                {coachData.contact.phone}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-gray-500" />
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm tracking-[.7px]">
                {coachData.contact.address}
              </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex gap-5 justify-center py-10">
        {coachData?.map((coach, index) => (
          <Card key={index} className="max-w-md w-full bg-white shadow-lg p-4">
            <CardContent className="p-6">
              <div className="flex flex-col items-center mb-6">
                <img
                  src={coach.imageUrl}
                  alt={coach.name}
                  className="w-24 h-24 rounded-full mb-4 shadow-profile-shadow object-cover"
                />
                <h2 className="text-xl font-semibold">{coach.name}</h2>
                <p className="text-gray-500">{coach.title}</p>
              </div>

              <div className="border-b mb-6 flex justify-center">
                <div className="flex space-x-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-2 px-1 text-sm font-medium transition-colors duration-150 ${
                        activeTab === tab.id
                          ? "border-b-2 border-blue-500 text-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="min-h-[200px]">{renderTabContent(coach, activeTab)}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Team;
