const Banner = () => {
  return (
    <div className="font-rajdhani mb-32">
      <div
        className="hero md:h-screen lg:h-[35rem]"
        style={{
          backgroundImage:
            "url(https://thecodude.com/demo/tf/ridexo/images/banner/bike-banner.jpg)",
        }}
      >
        <div className="md:flex justify-end md:pr-24 w-full text-left ">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-[#de2b43]">KTM Duke</h1>
            <p className="font-bold text-white text-9xl">For Rent</p>
            <p className="font-bold text-white text-7xl">150$/Day</p>
            <button className="btn text-2xl">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
