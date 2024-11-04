const ShortProfileCart = ({ service }) => {
  const { name, userImg, qualification, category, rating } = service;
  return (
    <div className="flex items-center gap-5">
      <div className="w-32 h-32 overflow-hidden rounded-b-full rounded-r-full">
        <img
          className="object-cover object-center w-full h-full"
          src={userImg}
          alt={name}
        />
      </div>
      <div>
        <h2 className="md:text-2xl text-xl md:font-bold font-semibold">
          {name}
        </h2>
        <p className="md:text-xl text-lg font-semibold ">{category}</p>
        <p className="md:text-xl text-lg font-semibold ">{qualification}</p>
      </div>
      <div>
        <p className="text-xl ">
          Rating: <span className="text-primary"> {rating}</span>
        </p>
      </div>
    </div>
  );
};

export default ShortProfileCart;
