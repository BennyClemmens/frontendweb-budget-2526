import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, Navigate } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import TransactionList from './pages/transactions/TransactionsList.jsx';
import PlacesList from './pages/places/PlacesList.jsx';
import NotFound from './pages/NotFound.jsx';
import About, { Services, History, Location } from './pages/about/About.jsx';
import PlaceDetail from './pages/places/PlaceDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: 'transactions',
    Component: TransactionList,
  },
  { 
    path: 'places',
    children: [
      {
        index: true,
        Component: PlacesList,
      },
      {
        path: ':id',
        Component: PlaceDetail,
      },
    ],
  },
  {
    path: 'about',
    Component: About,
    children: [
      {
        path: 'services',
        Component: Services,
      },
      {
        path: 'history',
        Component: History,
      },
      {
        path: 'location',
        Component: Location,
      },
    ],
  },
  {
    path: 'services',
    element: <Navigate to='/about/services' replace />,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
