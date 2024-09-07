import React from "react";
import gallery1 from "../../assets/gallery/gallery-1.jpg";
import gallery2 from "../../assets/gallery/gallery-2.jpg";
import gallery3 from "../../assets/gallery/gallery-3.jpg";
import gallery4 from "../../assets/gallery/gallery-4.jpg";
import gallery5 from "../../assets/gallery/gallery-5.jpg";
import gallery6 from "../../assets/gallery/gallery-6.jpg";

const Gallery = () => {
  return (
    <div className="container mx-auto font-rajdhani mb-32">
      <h2 className="font-bold text-5xl text-center my-14">Our Gallery</h2>
      <div className="grid  md:grid-cols-3 gap-2">
        <div className="flex flex-col gap-2">
        <img className="rounded-lg" src={gallery1} alt="" />
        <img className="rounded-lg" src={gallery4} alt="" />
        </div>
        <div className="flex flex-col gap-2">
        <img className="rounded-lg" src={gallery5} alt="" />
        <img className="rounded-lg" src={gallery2} alt="" />
        </div>
        <div className="flex flex-col gap-2">
        <img className="rounded-lg" src={gallery3} alt="" />
        <img className="rounded-lg" src={gallery6} alt="" />
        </div>
        
        
    
      </div>
    </div>
  );
};
export default Gallery;
