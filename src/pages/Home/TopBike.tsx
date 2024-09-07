import React from "react";

const TopBike = () => {
  return (
    <div className=" font-rajdhani mb-32">
      <div className="border">
        <div className="flex flex-col md:flex-row items-center md:gap-5 lg:gap-16 bg-[#141414]">
          <img
            src="https://thecodude.com/demo/tf/ridexo/images/biker-man.png"
            className="md:w-1/2 sm:mb-10 md:mb-0 shadow-2xl"
          />
          <div className="md:w-1/2 text-white ">
            <h1 className="text-4xl font-bold">World Top 100 Bike For You</h1>
            <p className="py-6 font-light max-w-md">
              Fermentum assumenda, nostrud semper tellus reprehenderit, auctor
              aliquip officia, adipiscing! Sapien consequuntur consectetuer
              facere potenti? Incididuntmontes praesent, qui. Venenatis,
              consequuntur nobis pede.
            </p>
            <p className="mb-10 font-light">
              Harum incidunt mollis natus dui quas, massa irure cursus odit
              molestias nemo a cursus. Metus. Mollit irure posuere eget, sociis,
              aliquip, ipsum tempus turpis. Mollitia, sunt, egestas montes!
              Sollicitudin! Hendrerit rhoncu.
            </p>
            <div className="flex gap-5">
              <div
                className="radial-progress"
                style={{ "--value": 90, color:'#f4364f', padding:'1.25rem' }as React.CSSProperties}
                role="progressbar"
              >
                <p className="text-white text-sm text-center uppercase font-bold"><span className="text-3xl">90% </span> Motorbike</p>
              </div>
              <div
                className="radial-progress"
                style={{ "--value": 80, color:'#f4364f', padding:'1.25rem' } as React.CSSProperties}
                role="progressbar"
              >
                <p className="text-white text-sm text-center uppercase font-bold"><span className="text-3xl">80% </span> 
                Scooter</p>
              </div>
              <div
                className="radial-progress"
                style={{ "--value": 60, color:'#f4364f', padding:'1.25rem' }as React.CSSProperties}
                role="progressbar"
              >
                <p className="text-white text-sm text-center uppercase font-bold"><span className="text-3xl">60% </span> Bicycle</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBike;
