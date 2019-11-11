import React from 'react';
import css from './App.module.css';

import Navbar from "./Navbar/Navbar";
import BanksPage from "../BanksPage/BanksPage";
import CreateBankPage from "../CreateBankPage/CreateBankPage";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
      <BrowserRouter>
          <div className={css.app_wrapper}>
              <Navbar/>
              <div className={css.app_wrapper_content}>
                  <Route path='/directoryBanks/list' render={() => <BanksPage/>}/>
                  <Route path='/createBank' render={() => <CreateBankPage/>}/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
