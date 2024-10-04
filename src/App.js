import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/signup"; // Corrected spelling from 'singup' to 'signup'
import Header from "./component/Header/header";
import Footer from "./component/Footer/footer";
import Speciality from "./component/speciality";
import Login from "./Pages/login";
import Search from "./component/searchbarr";
import img from "./image.png";
import CityGrid from "./component/findbycity";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivatePractice from "./component/Doctor";
import Insurance from "./component/insurance";
import Home from "./Home"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        

        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={
          <>
          <Search />
          <Insurance />
          <Speciality />
          <img src={img} alt="Logo" style={{ width: "100%", height: "100%" }} />
          <CityGrid />
          <PrivatePractice />
          </>
        }/>
         <Route path="/dummy" element={<PrivatePractice />} />
      </Routes>
      

     
      <Footer />
    </Router>
  );
}

export default App;
