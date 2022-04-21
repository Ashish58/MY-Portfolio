import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';

import NavMenu from './components/NavMenu';
import SmoothScrollBar from './components/SmoothScrollBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScrollBar>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
     </SmoothScrollBar>
      </Router>

    </>
  );
}

