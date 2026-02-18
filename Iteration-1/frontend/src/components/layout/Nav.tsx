import { NavLink } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="tabs tabs-boxed bg-accent p-2 rounded-lg mb-4">
      <NavLink
        to="/exercises"
        end
        className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`}
      >
        Home
      </NavLink>
    </nav>
  );
}
