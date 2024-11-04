// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/11.jpg";
import img2 from "../../../assets/home/12.jpg";
import img3 from "../../../assets/home/13.jpg";
import img4 from "../../../assets/home/14.jpg";
import SectionTitle from "../../../Compunents/SectionTitle/SectionTitle";

const Categories = () => {
  return (
    <div>
      <SectionTitle
        heading={"All categories"}
        subHeading={"Explore more"}
      ></SectionTitle>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" cursor-pointer">
          <img src={img1} alt="" />
          <h3 className="text-4xl uppercase text-center text-yellow-500 -mt-16">
            Teacher
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" cursor-pointer">
          <img src={img2} alt="" />
          <h3 className="text-4xl uppercase text-center text-yellow-500 -mt-16">
            Doctor
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" cursor-pointer">
          <img src={img3} alt="" />
          <h3 className="text-4xl uppercase text-center text-yellow-500 -mt-16">
            Lawyer
          </h3>
        </SwiperSlide>
        <SwiperSlide className=" cursor-pointer">
          <img src={img4} alt="" />
          <h3 className="text-4xl uppercase text-center text-yellow-500 -mt-16">
            Electrician
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
