import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5">
        <div className="flex flex-col justify-center w-full p-6 rounded-md sm:p-16 xl:col-span-2 dark:bg-gray-50">
          <span className="block mb-2 dark:text-violet-600">
            Chennai Talents Pickle Ball Academy
          </span>
          <h1 className="text-5xl font-extrabold dark:text-gray-900">
            Create Your Gaming Legacy
          </h1>
          <p className="my-8">
            <span className="font-medium dark:text-gray-900">
              Adaptable and dynamic.&nbsp; <br></br>
            </span>
            The ultimate pickleball system for players at every level.
          </p>
          <button className="w-full py-2 font-semibold rounded-md bg-yellow-300 text-gray-800">
            Sign Up Today
          </button>
        </div>
        <div className="object-cover w-full h-full rounded-md xl:col-span-3 bg-gray-500">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
