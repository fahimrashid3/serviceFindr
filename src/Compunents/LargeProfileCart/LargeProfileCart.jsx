import { useEffect, useState } from "react";
import SectionBanner from "../SectionBanner/SectionBanner";
import Cart from "../Cart/Cart";

// TODO: show all button not working

const LargeProfileCart = ({ category }) => {
  const { serviceProviderType, serviceImg, shortDescription } = category;
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("users.json")
      .then((res) => res.json())
      .then((data) => {
        const allRequireUser = data.filter(
          (item) => item.category === serviceProviderType
        );
        const requireUser = allRequireUser.slice(0, 8);
        setUser(requireUser);
      });
  }, [serviceProviderType]);
  return (
    <div>
      <div className="mb-10 md:mb-16 lg:mb-20">
        <SectionBanner
          img={serviceImg}
          title={serviceProviderType}
          descriptions={shortDescription}
        ></SectionBanner>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {user.map((user) => (
          <Cart key={user._id} user={user}></Cart>
        ))}
      </div>
      <div className="mx-auto text-center mt-12">
        <button className="btn btn-outline btn-success border-0 border-b-4">
          Show all
        </button>
      </div>
    </div>
  );
};

export default LargeProfileCart;