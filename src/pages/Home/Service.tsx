import people from "../../assets/people.png"
import helmet from "../../assets/racing-helmet.png"
import velocity from "../../assets/velocity.png"
import world from "../../assets/world.png"

const Service =()=>{
return(
<div className='bg-[#f6f5ff] py-20'>
    <div className='container mx-auto font-rajdhani flex justify-center'>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-36">

        <div className="flex items-center gap-3">
            <img className="h-16" src={people} alt="" />
            <div>
                <p className="text-3xl font-semibold">55991</p>
                <p>Happy Customers</p>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <img className="h-16" src={helmet} alt="" />
            <div>
                <p className="text-3xl font-semibold">25469
                </p>
                <p>Bike In Garage</p>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <img className="h-16" src={velocity} alt="" />
            <div>
                <p className="text-3xl font-semibold">214561542
                </p>
                <p className="font-normal">Total Kilometer/Mil</p>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <img className="h-16" src={world} alt="" />
            <div>
                <p className="text-3xl font-semibold">47856
                </p>
                <p>Online Solutions</p>
            </div>
        </div>
        </div>
    </div>
</div>
)
};
export default Service;