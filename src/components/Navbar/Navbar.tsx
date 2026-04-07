import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import logo from "../../assets/site-logo.svg"

export default function Navbar(): any {

  const [open,setOpen] = useState(false)
  return (
    <nav className="navbar" dir="rtl">
      <div className="container nav-inner">
        <Link to="/" className="brand-link">
          <img src={logo} alt="10 Padel Arena" className="logo" />
          <span className="brand-text">10PadelArena</span>
        </Link>

        <button
          className="mobile-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M3 6h18M3 12h18M3 18h18'} />
          </svg>
        </button>

        <ul className="nav-links" role="menubar">
          <li><Link to="/tournaments">תחרויות</Link></li>
          <li><Link to="/publishers">מפרסמים</Link></li>
          <li><Link to="/tournaments">מקומות</Link></li>
        </ul>

        <div className="nav-actions">
          <Link to="/login" className="login">התחברות</Link>
          <Link to="/signup" className="signup">הרשמה</Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={open ? 'mobile-menu open' : 'mobile-menu'} aria-hidden={!open}>
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>בית</Link></li>
          <li><Link to="/tournaments" onClick={() => setOpen(false)}>תחרויות</Link></li>
          <li><Link to="/publishers" onClick={() => setOpen(false)}>מפרסמים</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>צור קשר</Link></li>
        </ul>
        <div className="mobile-actions">
          <Link to="/login" className="login" onClick={() => setOpen(false)}>התחברות</Link>
          <Link to="/signup" className="signup" onClick={() => setOpen(false)}>הרשמה</Link>
        </div>
      </div>
    </nav>
  )
}
