
import { FaSearch } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";

const Works = () => {
  return (
    <div className="container mx-auto font-rajdhani mb-32">
      <h2 className="font-bold text-5xl text-center my-14">How it Works?</h2>
      <div className="flex justify-center gap-5">
        <div className="max-w-sm flex flex-col justify-center items-center">
          <button className="text-6xl text-[#f4364f] hover:bg-[#f4364f] hover:text-white p-8 border rounded-md mb-10 w-fit">
            {" "}
            <FaSearch />{" "}
          </button>
          <h3 className="text-2xl mb-10 font-semibold">Find the Right Bike</h3>
          <p className="font-light text-center">
            Repellendus facilisi ultrices ad culpa qui sit adipiscing! Quidem
            bibendum quisque. Tempus, maxime repudianda.
          </p>
        </div>

        <div className="max-w-sm flex flex-col justify-center items-center">
          <button className="text-6xl text-[#f4364f] hover:bg-[#f4364f] hover:text-white p-8 border rounded-md mb-10 w-fit">
            {" "}
            <TbHandClick />{" "}
          </button>
          <h3 className="text-2xl mb-10 font-semibold">Book it Online</h3>
          <p className="font-light text-center">
          Sem eget occaecati viverra, corporis aliquam iste laboriosam corrupti tristique. Occaecat tempor! Torquent.
          </p>
        </div>
        <div className="max-w-sm flex flex-col justify-center items-center">
          <button className="text-6xl text-[#f4364f] hover:bg-[#f4364f] hover:text-white p-8 border rounded-md mb-10 w-fit">
            <MdDirectionsBike />
          </button>
          <h3 className="text-2xl mb-10 font-semibold">Enjoy your Ride</h3>
          <p className="font-light text-center">
          Blandit modi porro? Sequi sem pharetra duis rhoncus.amet ipsum faucibus iusto, labore nisl, porttitor ultrices.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Works;
