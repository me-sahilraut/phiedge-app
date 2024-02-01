import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navigation from './component/Navigation';
import AboutUs from './component/AboutUs';
import Footer from './component/Footer';

const AppLayout = () => {

  return (
    <div className='overflow-hidden'>
      <Navigation />
      <Outlet />
      <Footer />
    </div>

  )

}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <AboutUs />
      },

    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
