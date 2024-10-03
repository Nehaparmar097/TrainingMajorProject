import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/signup'; // Corrected spelling from 'singup' to 'signup'
import Header from './component/header';
import Footer from './component/footer';
import SearchBar from './component/Search/Searchbar'
import Mid1 from './component/mid1';
import Login from './Pages/login'
import InsurancePlans from './component/mid2'
import img  from './image.png';


function App() {
  return (
    <Router>
      <Header />
      <SearchBar/>
      <Mid1/>
      <InsurancePlans/>
      <img src={img} alt="Logo" style={{ width: '100%', height: '100%' }} />
      
      <Routes>
      <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
