import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/site-logo.svg";
import SignUpModal from "../SignUpModal";

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [open, setOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  return (
    <nav className="navbar" dir="rtl">
      <div className="container nav-inner">
        <Link to="/" className="brand-link">
          <img src={logo} alt="10 Padel Arena" className="logo" />
          <span className="brand-text">10PadelArena</span>
        </Link>

        <button
          className="mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"}
            />
          </svg>
        </button>

        <ul className="nav-links" role="menubar">
          <li>
            <Link to="/tournaments">תחרויות</Link>
          </li>
          <li>
            <Link to="/publishers">מפרסמים</Link>
          </li>
          <li>
            <Link to="/tournaments">מקומות</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <div
            className="signin-btn"
            aria-label="Sign in"
            onClick={() => setSignupOpen(true)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="currentColor"
              />
            </svg>
            <span>התחברות</span>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={open ? "mobile-menu open" : "mobile-menu"}
        aria-hidden={!open}
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              בית
            </Link>
          </li>
          <li>
            <Link to="/tournaments" onClick={() => setOpen(false)}>
              תחרויות
            </Link>
          </li>
          <li>
            <Link to="/publishers" onClick={() => setOpen(false)}>
              מפרסמים
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>
              צור קשר
            </Link>
          </li>
        </ul>
        <div className="mobile-actions">
          <div
            className="signin-btn mobile"
            onClick={() => {
              setSignupOpen(true);
              setOpen(false);
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="currentColor"
              />
            </svg>
            <span>התחברות</span>
          </div>
        </div>
      </div>

      <SignUpModal open={signupOpen} onClose={() => setSignupOpen(false)} />
    </nav>
  );
};

export default Navbar;
