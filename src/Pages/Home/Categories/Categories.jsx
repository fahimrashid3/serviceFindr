// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// import img1 from "../../../assets/home/11.jpg";
// import img2 from "../../../assets/home/12.jpg";
// import img3 from "../../../assets/home/13.jpg";
// import img4 from "../../../assets/home/14.jpg";
import SectionTitle from "../../../Compunents/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div className="mb-12 md:mb-24 lg:mb-32">
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
        {categories.map((category) => (
          <SwiperSlide key={category._id} className="cursor-pointer">
            <img src={category.serviceImg} alt="" />
            <h3 className="text-4xl uppercase text-center text-primary -mt-16">
              {category.serviceProviderType}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
