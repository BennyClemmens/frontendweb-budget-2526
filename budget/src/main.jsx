import {
  createContext,
  StrictMode,
} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
} from 'react-router';
import {
  RouterProvider,
} from 'react-router/dom';
import TransactionList from './pages/transactions/TransactionsList.jsx';
import PlacesList from './pages/places/PlacesList.jsx';
import NotFound from './pages/NotFound.jsx';
import About, {
  Services,
  History,
  Location,
} from './pages/about/About.jsx';
import PlaceDetail from './pages/places/PlaceDetail.jsx';
import AddOrEditTransaction from './pages/transactions/AddOrEditTransaction';
import Layout from './pages/Layout.jsx';

const defaultContextAsFallback = {
  darkmode: false,
  toggleTheme: () => {
    console.log('toggleTheme not yet implemented');
  },
};

export const ThemeContext = createContext(defaultContextAsFallback);

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: '/',
        element: <Navigate replace to='/transactions' />,
      },
      {
        path: 'transactions',
        children: [
          {
            index: true,
            Component: TransactionList,
          },
          {
            path: 'add',
            Component: AddOrEditTransaction,
          },          {
            path: 'edit/:id',
            Component: AddOrEditTransaction,
          },
        ],
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

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <ThemeContext.Provider value={{darkmode: true}}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ThemeContext.Provider>,
);
