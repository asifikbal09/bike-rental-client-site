import React from "react";
import BikeCart from "../../components/BikeCart";

const PopularDestinations = () => {
  return (
    <div className="container mx-auto font-rajdhani mb-32">
      <h2 className="font-bold text-5xl text-center my-14">
        Most Popular Destinations
      </h2>
      <div className="flex justify-center">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <BikeCart/>
        <BikeCart/>
        <BikeCart/>
        <BikeCart/>
        <BikeCart/>
        <BikeCart/>
      </div>
      </div>
    </div>
  );
};
export default PopularDestinations;
