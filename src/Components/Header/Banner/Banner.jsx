import "./Banner.css"

const Banner = () => {
  return (
    <div className="bg-img flex flex-col justify-center items-center text-center">
      
        <h1 className="text-5xl font-bold mb-10">I Grow By Helping People In Need</h1>
  <div className="input-group flex justify-center items-center text-center">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="hover:bg-red-700 btn-square text-white w-[110px] bg-[#FF444A]">
      SEARCH
    </button>
  </div>

    </div>
  );
};

export default Banner;
