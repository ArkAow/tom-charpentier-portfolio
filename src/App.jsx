import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import City from "./components/City";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary flex-col'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero /> 
          <City />
        </div>  
        <About />
        <Experience />
        {/* <Contact /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;