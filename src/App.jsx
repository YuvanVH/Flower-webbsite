// src/App.js

import React from 'react';
import './styles/App.css';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import FlowerFactsView from './views/FlowerFactsView';
import FlowerInfoView from './views/FlowerInfoView';
import ScrollUpButton from './components/ScrollUpButton.jsx';
import { createHashRouter, Link, Outlet, RouterProvider, Route } from 'react-router-dom';
import { AboutProvider } from './components/AboutContext'; // Importera AboutProvider

function Root() {
  return (
    <>
      <div >
        <nav className='appNav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/flowers">Flowers Facts</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Outlet />
          <ScrollUpButton />
        </main>
      </div>
    </>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: '/' },
        { element: <AboutView />, path: '/about' },
        { element: <ContactView />, path: '/contact' },
        { element: <FlowerFactsView />, path: '/flowers' },
        { element: <FlowerInfoView />, path: '/flowers/:id' }, // Lägg till en Route för FlowerInfoView
      ],
      element: <Root />
    }
  ]);

  // Retur med det övriga innehållet
  return (
    <RouterProvider router={router}>
      {/* Använd AboutProvider för att tillhandahålla kontexten */}
      <AboutProvider>
        <div id="root">
          {/* app-innehåll */}
        </div>
      </AboutProvider>
    </RouterProvider>
  );
}

export default App;
