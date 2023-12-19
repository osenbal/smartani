import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const MainLayout: React.FC = () => {
  // filter current path to show bottom navigation
  const currentPath = window.location.pathname;
  const isShowBottomNavigation =
    currentPath !== '/login' && currentPath !== '/register';

  return (
    <>
      <main>
        <Outlet />
      </main>

      {isShowBottomNavigation && (
        <footer className="fixed bottom-0 w-full mx-auto left-0 right-0 z-30">
          <BottomNavigation />
        </footer>
      )}
    </>
  );
};

export default MainLayout;
