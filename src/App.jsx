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

function Root() {
  return (
    <>
      <div className="fadeEffect"> {/* Lägg till klassen här för att applicera effekten globalt */}
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
  )
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

  // Returuttalandet med det övriga innehållet
  return (
    <RouterProvider router={router}>
      <div id="root">
        {/* app-innehåll */}
      </div>
    </RouterProvider>
  );
}

export default App;
