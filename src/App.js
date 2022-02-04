import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
