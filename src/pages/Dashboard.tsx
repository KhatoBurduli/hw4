import React from 'react';
import { useLoaderData, Outlet, NavLink } from 'react-router-dom';

interface User {
  name: string;
  age: number;
}

const Dashboard: React.FC = () => {
  const { user } = useLoaderData() as { user: User };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}!</p>
      <nav>
        <NavLink to="profile">Profile</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
