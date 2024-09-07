import { FaLocationDot} from "react-icons/fa6";

const BikeCart = () => {
  return (
  
      <div className="font-rajdhani card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
            <div className="flex justify-between">

            <div>

          <h2 className="card-title text-2xl">GTC Origine Bike</h2>
          <p className="flex items-center gap-1"><FaLocationDot/> London, UK</p>
            </div>
            <div>
                <p className="text-2xl font-bold m-0">$100</p>
                <p className="font-light m-0 text-end">Day</p>
            </div>
            </div>
          <div className="card-actions justify-start">
            <button className="btn btn-primary text-xl font-normal">Book Now</button>
          </div>
        </div>
      </div>
  );
};
export default BikeCart;
