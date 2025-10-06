import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import TransactionList from './pages/transactions/TransactionsList.jsx';
import PlacesList from './pages/places/PlacesList.jsx';
import NotFound from './pages/NotFound.jsx';
import About from './pages/about/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  { path: 'transactions', Component: TransactionList },
  { path: 'places', Component: PlacesList },
  { path: 'about', Component: About },
  { path: '*', Component: NotFound },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
