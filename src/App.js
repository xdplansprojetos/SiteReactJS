import './App.css';
import Home from './Pages/Home/home';
 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
import Contact from './Pages/Contact/contact';
import Servicos from './Pages/Services/services';

import AppBarMenu from './Components/AppBar/appbar'


function App() {
  return (
    <Router>
      <div className="App">
        <AppBarMenu />
        <Switch>
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
