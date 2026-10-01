import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">Portfolio</h2>

      <nav className="links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? "activelinks" : ""}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "activelinks" : ""}
        >
          About
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) => isActive ? "activelinks" : ""}
        >
          Skills
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) => isActive ? "activelinks" : ""}
        >
          Project
        </NavLink>

        <NavLink
          to="/education"
          className={({ isActive }) => isActive ? "activelinks" : ""}
        >
          Education
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "activelinks" : ""}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;