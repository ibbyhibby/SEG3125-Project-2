import React from 'react';
import {Home} from './Home';
import WrongPage from './WrongPage.js';
import Nintendo from './Nintendo';
import Playstation from './Playstation';
import Xbox from './Xbox';
import Console from './Console';
import NintendoProduct from './Nintendo-Product';
import PlaystationProduct from './Playstation-Product';
import XboxProduct from './Xbox-Product';
import ConsoleProduct from './Console-Product';
import Purchase from './Purchase';
import ComingSoon from './ComingSoon';
import Contact from './Contact';
import LearnMore from './LearnMore';
import { Stats } from './Stats';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {

  //const title = "Welcome to the new blog";
  //const likes = 50;
  //const person = {name: 'yoshi', age: 30};
  //const link = "http://www.google.com";

  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path='Bravo-Experiments' element={<Home/>} />
            <Route path = "*" element={ <WrongPage />}></Route>
            <Route path = "/" element={ <Home />}></Route>
            <Route path = "/Nintendo" element={ <Nintendo />}></Route>
            <Route path = "/Nintendo-Product" element={ <NintendoProduct />}></Route>
            <Route path = "/Playstation" element={ <Playstation />}></Route>
            <Route path = "/Playstation-Product" element={ <PlaystationProduct />}></Route>
            <Route path = "/Xbox" element={ <Xbox />}></Route>
            <Route path = "/Xbox-Product" element={ <XboxProduct />}></Route>
            <Route path = "/Console" element={ <Console />}></Route>
            <Route path = "/Console-Product" element={ <ConsoleProduct />}></Route>
            <Route path = "/Purchase" element={ <Purchase />}></Route>
            <Route path = "/ComingSoon" element={ <ComingSoon />}></Route>
            <Route path = "/Contact" element={ <Contact />}></Route>
            <Route path = "/LearnMore" element={ <LearnMore />}></Route>
            <Route path = "/Stats" element={ <Stats />}></Route>
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
