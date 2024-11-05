const Cart = ({ user }) => {
  const { userImg, category, name, qualification } = user;
  return (
    <div className="overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={userImg} alt={category} />
        </figure>
        <div className="card-body">
          <p className="text-green-500">Available</p>
          <h2 className="card-title">{name}</h2>
          <p>{qualification}</p>
          <div className="flex items-center card-actions justify-end">
            <p>{category}</p>
            <button className="btn btn-success btn-outline">
              View Full Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
