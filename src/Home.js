
import "./App.css";

import Speciality from "./component/speciality";
import Hero from "./component/searchbarr";
import img from "./image.png";
import CityGrid from "./component/findbycity";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivatePractice from "./component/Doctor";
import Insurance from "./component/insurance";

function Home() {
  return (
   
       <>

        
          <Hero />
          <Insurance />
          <Speciality />
       
      

      <img src={img} alt="Logo" style={{ width: "100%", height: "100%" }} />
      <CityGrid />
      <PrivatePractice />
      </>
     
  );
}

export default Home;
