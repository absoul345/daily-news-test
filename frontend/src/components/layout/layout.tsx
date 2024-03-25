import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="px-12 py-8">{children}</section>
    </main>
  );
};

export default Layout;

// px-28 sm:px-44 md:px-20
