import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />

        {/* 1 */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          {/* 2 */}
          <Route path="/projects">
            <Projects />
          </Route>

          {/* 3 */}
          <Route path="/contact">
            <Contact />
          </Route>

          {/* 4 */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </>
  );
}
