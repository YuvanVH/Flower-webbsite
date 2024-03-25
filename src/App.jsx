import React from 'react';
import './styles/App.css';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import FlowerFactsView from './views/FlowerFactsView';
import ScrollUpButton from './components/ScrollUpButton.jsx'

import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider
} from 'react-router-dom'

function Root() {
  return (
    <>
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
        { element: <FlowerFactsView />, path: '/flowers' }
      ],
      element: <Root />
    }
  ])

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
