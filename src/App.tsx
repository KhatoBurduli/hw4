import React from 'react';
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const dashboardLoader = async () => {
  const isAuthenticated = true; 
  if (!isAuthenticated) {
    return redirect('/');
  }
  return { user: { name: 'John Doe', age: 30 } };
};

const profileAction = async ({ request }: any) => {
  const formData = await request.formData();
  const name = formData.get('name');
  alert(`Form submitted with name: ${name}`);
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          { path: 'profile', element: <Profile />, action: profileAction },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
