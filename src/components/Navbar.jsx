import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/site-logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container nav-inner" dir="rtl">
        <div className="brand">
          <Link to="/" className="brand-link" onClick={() => setOpen(false)}>
            <img src={logo} alt="10 Padel Arena" className="logo" />
            <span className="brand-text">10 Padel Arena</span>
          </Link>
        </div>

        <button
          className="mobile-toggle md:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <li>
            <Link to="/competitions" onClick={() => setOpen(false)}>
              תחרויות
            </Link>
          </li>
          <li>
            <Link to="/organizers" onClick={() => setOpen(false)}>
              מארגנים
            </Link>
          </li>
          <li>
            <Link to="/members" onClick={() => setOpen(false)}>
              שחקנים
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/login" className="login" onClick={() => setOpen(false)}>
            התחברות
          </Link>
          <Link to="/signup" className="signup" onClick={() => setOpen(false)}>
            הירשם
          </Link>
        </div>
      </div>

      {open && (
        <div className="mobile-menu md:hidden" dir="rtl">
          <Link
            to="/competitions"
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            תחרויות
          </Link>
          <Link
            to="/organizers"
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            מארגנים
          </Link>
          <Link
            to="/members"
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            שחקנים
          </Link>
          <div className="mobile-actions">
            <Link
              to="/login"
              className="mobile-login"
              onClick={() => setOpen(false)}
            >
              התחברות
            </Link>
            <Link
              to="/signup"
              className="mobile-signup"
              onClick={() => setOpen(false)}
            >
              הירשם
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
