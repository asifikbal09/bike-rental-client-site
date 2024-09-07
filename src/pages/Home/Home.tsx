import Banner from "./Banner";
import Gallery from "./Gallery";
import PopularDestinations from "./PopularDestinations";
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
    </div>
  );
};
export default Home;
