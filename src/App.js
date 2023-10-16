import './index.css';
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import Tours from './Components/Tours';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Tours/>
     <Footer/>
    </div>
  );
}

export default App;
