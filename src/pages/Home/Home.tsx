import Banner from "./Banner";
import Gallery from "./Gallery";
import PopularDestinations from "./PopularDestinations";
import Service from "./Service";
import TopBike from "./TopBike";
import Works from "./Works";

const Home = () => {
  return (
    <div>
      <Banner />
      <Works />
      <TopBike />
      <PopularDestinations />
      <Gallery />
      <Service/>
    </div>
  );
};
export default Home;
