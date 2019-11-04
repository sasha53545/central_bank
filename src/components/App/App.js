import React from 'react';
import './App.css';

import Navbar from "../Navbar/Navbar";
import DirectoryBanks from "../DirectoryBanks/DirectoryBanks";
import CreateBank from "../CreateBank/CreateBank";
import Footer from "../Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Navbar/>
              <div className="app-wrapper-content">
                  <Route path='/directoryBanks' render={() => <DirectoryBanks name="Sberbank" bik="314" kor="51351" address="Moscow"/>}/>
                  <Route path='/createBank' component={CreateBank}/>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
