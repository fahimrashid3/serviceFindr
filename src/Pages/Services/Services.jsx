import { useEffect, useState } from "react";
import LargeProfileCart from "../../Compunents/LargeProfileCart/LargeProfileCart";
import SectionBanner from "../../Compunents/SectionBanner/SectionBanner";
import img from "../../assets/home/banner.jpg";
import SectionTitle from "../../Compunents/SectionTitle/SectionTitle";
import Cart from "../../Compunents/Cart/Cart";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Services = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // TODO: fixe fetch problem using apis (fetch only required item)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("users.json")
      .then((res) => res.json())
      .then((data) => {
        const allPopularUsers = data.filter((item) => item.rating >= 4.8);
        const popularUsers = allPopularUsers.slice(0, 8);
        setUsers(popularUsers);
      });
  }, []);

  return (
    <div className="-mt-20">
      <Helmet>
        <title>ServiceFinder | Services</title>
      </Helmet>
      <SectionBanner title="Our Services" img={img}></SectionBanner>
      <SectionTitle
        heading="Top Providers"
        subHeading="Have a looks"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {users.map((user) => (
          <Cart key={user._id} user={user}></Cart>
        ))}
      </div>
      <div className="mx-auto text-center mt-12">
        <Link
          to="/providers"
          className="btn btn-outline btn-success border-0 border-b-4 lg:mb-20 md:mb-16 mb-8"
        >
          Show all
        </Link>
      </div>
      {categories.map((category) => (
        <LargeProfileCart
          key={category._id}
          category={category}
        ></LargeProfileCart>
      ))}
    </div>
  );
};

export default Services;
