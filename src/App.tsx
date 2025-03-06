import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import routes from './routing/routes';
import './App.css'

const AppRoutes: React.FC = () => useRoutes(routes);

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
      <footer className="app-footer">
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default App;
