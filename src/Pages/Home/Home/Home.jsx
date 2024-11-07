import SectionBanner from "../../../Compunents/SectionBanner/SectionBanner";
import Carousel from "../Carousel/Carousel";
import Categories from "../Categories/Categories";
import img from "../../../assets/home/HomePageBanner.png";
import PopularServices from "../PopularServices/PopularServices";
import ContactNumber from "../ContactNumber/ContactNumber";
import Featured from "../Featured/Featured";
import Reviews from "../Reviews/Reviews";
import { Helmet } from "react-helmet";

const Home = () => {
  const title = "ServiceFinder";
  const descriptions =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  return (
    <div>
      <Helmet>
        <title>ServiceFinder | Home</title>
      </Helmet>
      <Carousel></Carousel>
      <Categories></Categories>
      <SectionBanner
        img={img}
        title={title}
        descriptions={descriptions}
      ></SectionBanner>
      <PopularServices></PopularServices>
      <ContactNumber></ContactNumber>
      <Featured></Featured>
      {/* TODO: filter the reviews according to the rating(star) */}
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
