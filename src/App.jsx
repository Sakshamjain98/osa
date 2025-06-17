import { Route, Routes } from 'react-router-dom'; // Import Routes and Route
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import AboutUs from './components/about-us/AboutUs';
import ContactAndFooter from './components/Contact/ContactFooter';
import WhoWeAre from './components/WhoAreWe/WhoAreWe';
import Careers from './components/Careers/Careers'; // Import your Careers component
import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} /> {/* Add the careers route */}
        <Route path="/services" element={<Value />} />
        {/* Add more routes as needed */}
      </Routes>
      <ContactAndFooter />
    </div>
  );
}

export default App;
