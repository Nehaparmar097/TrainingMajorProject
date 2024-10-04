import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/signup'; // Corrected spelling from 'singup' to 'signup'
import Header from './component/header';
import Footer from './component/footer';
import Speciality from './component/speciality';
import Login from './Pages/login'
import Hero from './component/searchbarr'
import img  from './image.png';
import CityGrid from "./component/findbycity"
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivatePractice from './component/Doctor'
import Insurance from './component/insurance';

function App() {
  return (
    <Router>
      
      <Header />
      <Routes>
     
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
   
      
      </Routes>
      <Hero/>
      <Insurance/>
      <Speciality/>
    
      <img src={img} alt="Logo" style={{ width: '100%', height: '100%' }} />
      <CityGrid/>
      <PrivatePractice/>
      <Footer />
    </Router>
  );
}

export default App;
