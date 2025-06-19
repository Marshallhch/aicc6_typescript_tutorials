import Sidebar from '@/components/Sidebar';
import React from 'react';
import StoreProvider from './redux';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = false;
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main
        className={`flex w-full flex-col bg-gray-50 dark:bg-gray-900 ${
          isSidebarCollapsed ? '' : 'md:pl-64'
        }`}
      >
        {/* navbar */}
        {/* <Navbar /> */}
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
