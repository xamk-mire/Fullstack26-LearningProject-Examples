import { NavLink } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="tabs tabs-box bg-base-200/50 p-2 rounded-lg mb-4">
      <NavLink
        to="/exercises"
        end
        className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`}
      >
        Exercises
      </NavLink>
    </nav>
  );
}
