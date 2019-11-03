import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import DirectoryBanks from "./components/DirectoryBanks/DirectoryBanks";
import CreateBank from "./components/CreateBank/CreateBank";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Navbar/>
              <div className="app-wrapper-content">
                  <Route path='/directoryBanks' component={DirectoryBanks}/>
                  <Route path='/createBank' component={CreateBank}/>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
