import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Testimonials: React.FC = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-2" id="testimonial">
      <div>
        <img
          src="https://images.pexels.com/photos/29439346/pexels-photo-29439346/free-photo-of-woman-playing-pickleball-in-hanoi-vietnam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500"
        />
      </div>

      <div className="w-full p-6 space-y-8 rounded-md  lg:h-full lg:p-8 dark:bg-gray-50">
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
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <div className="p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50">
            <SwiperSlide>
              <div className="flex h-full flex-col items-center w-full">
                <div className="w-[100px] h-[100px] rounded-full object-cover overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                    alt=""
                    className="object-cover w-full h-full rounded-full dark:bg-gray-500"
                  />
                </div>
                <blockquote className="max-w-lg text-lg italic font-medium text-center">
                  "Et, dignissimos obcaecati. Recusandae praesentium doloribus
                  vitae? Rem unde atque mollitia!"
                </blockquote>
                <div className="text-center dark:text-gray-600">
                  <p>Leroy Jenkins</p>
                  <p>CEO of Company Co.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full flex-col items-center w-full">
                <div className="w-[100px] h-[100px] rounded-full object-cover overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                    alt=""
                    className="object-cover w-full h-full rounded-full dark:bg-gray-500"
                  />
                </div>
                <blockquote className="max-w-lg text-lg italic font-medium text-center">
                  "Et, dignissimos obcaecati. Recusandae praesentium doloribus
                  vitae? Rem unde atque mollitia!"
                </blockquote>
                <div className="text-center dark:text-gray-600">
                  <p>Leroy Jenkins</p>
                  <p>CEO of Company Co.</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      {/* <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-50">
        <div className="w-[100px] h-[100px] rounded-full object-cover overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
            alt=""
            className="object-cover w-full h-full rounded-full dark:bg-gray-500"
          />
        </div>
        <blockquote className="max-w-lg text-lg italic font-medium text-center">
          "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
          Rem unde atque mollitia!"
        </blockquote>
        <div className="text-center dark:text-gray-600">
          <p>Leroy Jenkins</p>
          <p>CEO of Company Co.</p>
        </div>
      </div> */}

      {/* Work with us */}
      <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 dark:bg-gray-50">
        <h2 className="text-5xl font-bold dark:text-gray-900">
          Create with us
        </h2>
        <p className="dark:text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          facilis quod accusantium beatae cum nam adipisci reiciendis omnis
          possimus error quo animi voluptas magni, at incidunt. Nulla ex at
          ullam corporis quidem adipisci vitae, perferendis dolorem libero minus
          atque tenetur enim pariatur cupiditate commodi in beatae, ipsa
          eligendi? Quis, saepe.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
