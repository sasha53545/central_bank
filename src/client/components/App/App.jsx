import React from 'react';
import './App.module.css';

import Navbar from "./Navbar/Navbar";
import DirectoryBanks from "./Content/DirectoryBanks/DirectoryBanks";
import CreateBank from "./Content/CreateBank/CreateBank";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
          <div className="app_wrapper">
              <Navbar/>
              <div className="app_wrapper_content">
                  <Route path='/directoryBanks/list' render={() => <DirectoryBanks/>}/>
                  <Route path='/createBank' component={CreateBank}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
