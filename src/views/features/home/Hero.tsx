import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5 md:grid-cols-1">
        <div className="flex flex-col justify-center items-center w-full rounded-md xl:col-span-2 dark:bg-gray-50">
          <span className="block mb-2 dark:text-violet-600">
            Chennai Talents Pickle Ball Academy
          </span>
          <h1 className="xl:text-5xl lg:text-3xl text-5xl font-extrabold dark:text-gray-900">
            Create Your Gaming Legacy
          </h1>
          <p className="my-8">
            <span className="font-medium dark:text-gray-900">
              Adaptable and dynamic. <br></br>
            </span>
            The ultimate pickleball system for players at every level.
          </p>
          <button className="xl:w-full md:w-1/2 w-full py-2 font-semibold rounded-md bg-yellow-300 text-gray-800">
            Sign Up Today
          </button>
        </div>
        <div className="object-cover w-full h-full rounded-md xl:col-span-3 overflow-hidden">
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
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/29820786/pexels-photo-29820786/free-photo-of-empty-pickleball-court-with-net-in-summer-sun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/29665452/pexels-photo-29665452/free-photo-of-female-athlete-at-ahp-sports-event-in-hai-phong.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/29439337/pexels-photo-29439337/free-photo-of-young-man-playing-pickleball-indoors-in-hanoi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/17299534/pexels-photo-17299534/free-photo-of-ball-and-paddle-on-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
