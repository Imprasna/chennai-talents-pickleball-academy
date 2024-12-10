import React from "react";

// interface Feature {
//   title: string;
//   description: string;
// }

// const features: Feature[] = [
//   { title: "Equipment", description: "High-quality paddles and balls for beginners and pros alike." },
//   { title: "Training", description: "Join our training sessions to elevate your game." },
//   { title: "Events", description: "Exciting pickleball tournaments and local meetups." },
// ];

const Features: React.FC = () => {
  return (
    // <div className="py-12 bg-white">
    //   <h2 className="text-3xl font-bold text-center mb-8">Why Pickleball?</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
    //     {features.map((feature, idx) => (
    //       <div
    //         key={idx}
    //         className="p-6 border rounded-lg shadow-sm hover:shadow-lg"
    //       >
    //         <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
    //         <p className="text-gray-600">{feature.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <section>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="overflow-hidden rounded lg:flex lg:col-span-3">
          <img
            src="https://source.unsplash.com/random/485x365"
            alt=""
            className="object-cover w-full h-auto max-h-96 dark:bg-gray-500"
          />
          <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-50">
            <span className="self-start px-3 py-1 text-sm rounded-full dark:bg-violet-600 dark:text-gray-50">
              Business
            </span>
            <h2 className="text-3xl font-bold md:flex-1">
              Curating a workplace that inspires team movement
            </h2>
            <div>
              <p className="dark:text-gray-600">November 30, 2020</p>
              <p className="dark:text-gray-600">By Leroy Jenkins</p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
          <h3 className="inline font-medium dark:text-gray-900">
            Panel-based blocks.
          </h3>
          <p className="inline">
            Flexible panels that are perfect for building functional layouts.
          </p>
        </div>
        <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
          <h3 className="inline font-medium dark:text-gray-900">
            Responsive design.
          </h3>
          <p className="inline">Panels look great no matter the device.</p>
        </div>
        <div className="p-6 rounded lg:p-8 lg:py-12 dark:bg-gray-50">
          <h3 className="inline font-medium dark:text-gray-900">
            Premium support.
          </h3>
          <p className="inline">
            Join over 50 000 satisfied customers who use our templates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
