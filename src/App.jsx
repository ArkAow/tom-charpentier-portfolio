import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/NavBar";
import City from "./components/City";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <City />
      </div>
    </BrowserRouter>
  );
}

export default App;