import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { FloatingContact } from './FloatingContact';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      <Navbar />
      <CartDrawer />
      <FloatingContact />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
