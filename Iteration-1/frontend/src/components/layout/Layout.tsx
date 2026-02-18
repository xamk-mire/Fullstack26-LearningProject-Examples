import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Nav } from './Nav';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-base-300">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        <Nav />
        <Outlet />
      </main>
    </div>
  );
}
