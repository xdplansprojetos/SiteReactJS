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

import { createBrowserHistory } from 'history';

function App() {

  const history = createBrowserHistory({
    basename: "/"
  })
  

  return (
    <Router history={history}>
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
