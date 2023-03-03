import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="wk13react-portfolio">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/wk13react-portfolio/" element={<Home />} />
          <Route path="/wk13react-portfolio/about" element={<About />} />
          <Route path="/wk13react-portfolio/contact" element={<Contact />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/wk13react-portfolio/contact/*" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

