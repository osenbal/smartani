import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const MainLayout: React.FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>

      <footer className="fixed bottom-0 w-full mx-auto left-0 right-0">
        <BottomNavigation />
      </footer>
    </>
  );
};

export default MainLayout;
