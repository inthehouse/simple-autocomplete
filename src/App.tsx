import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
const LazyAutoComplete = React.lazy(() => import('./components/AutoComplete/AutoComplete'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="app-nav">
          <Link to="/" className="app-link">Search</Link>
          <Link to="/about" className="app-link">About</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div className="loading">Loading...</div>}>
                <LazyAutoComplete />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <About />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
