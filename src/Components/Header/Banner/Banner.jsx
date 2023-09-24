import "./Banner.css"

const Banner = () => {
  return (
    <div className="bg-img">
      <div className="form-control mx-auto">
        <h1>I Grow By Helping People In Need</h1>
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square w-[110px] bg-[#FF444A]">
      SEARCH
    </button>
  </div>
</div>
    </div>
  );
};

export default Banner;
