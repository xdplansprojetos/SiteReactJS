import './App.css';
import Home from './Pages/Home/home';
 import {
   BrowserRouter as Router,
   Switch,
   Route
 } from "react-router-dom";
import Contact from './Pages/Contact/contact';
import Servicos from './Pages/Services/services';
import AppBarMenu from './Components/AppBar/appbar'
import ListaProdutos from './Pages/Loja/ListaProdutos/listaprodutos';
import React, { useEffect, useState } from 'react';



// SITE V1 XDPlans.TECH

function App() {



  return (
    <Router>
      <div className="App">
        <AppBarMenu />
        <Switch>
          <Route path="/produtos">
          <ListaProdutos />
          </Route>
          <Route path="/contato">
          <Contact />
          </Route>
          <Route path="/servicos">
            <Servicos />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        

      </div>
    </Router>
  );
}

export default App;
