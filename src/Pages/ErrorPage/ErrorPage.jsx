import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import { IoArrowBack } from "react-icons/io5";
import errorImg from "../../assets/404.png";

const ErrorPage = () => {
  return (
    <div>
      <Link to="/">
        <button className="flex items-center gap-2 mx-auto mt-20 font-bold text-3xl text-red-600 btn btn-outline btn-error">
          <IoArrowBack /> Back to home
        </button>
      </Link>

      <img className="mx-auto lg:my-20 md:my-12 my-8 " src={errorImg} alt="" />
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
