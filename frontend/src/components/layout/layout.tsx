import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="py-8 px-12">{children}</section>
    </main>
  );
};

export default Layout;
