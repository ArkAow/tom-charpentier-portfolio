import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/NavBar";
import About from "./components/About";
import City from "./components/City";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <About />
        </div>
        <City />
        <Experience />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;