import React from "react";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  { title: "Equipment", description: "High-quality paddles and balls for beginners and pros alike." },
  { title: "Training", description: "Join our training sessions to elevate your game." },
  { title: "Events", description: "Exciting pickleball tournaments and local meetups." },
];

const Features: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Why Pickleball?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-lg shadow-sm hover:shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
