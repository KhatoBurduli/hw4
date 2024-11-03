import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
        <NavLink to="/" end style={{ margin: '0 10px' }}>Home</NavLink>
        <NavLink to="about" style={{ margin: '0 10px' }}>About</NavLink>
        <NavLink to="dashboard" style={{ margin: '0 10px' }}>Dashboard</NavLink>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
