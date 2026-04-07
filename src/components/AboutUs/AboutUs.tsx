import React from "react";
import "./style.css";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function AboutUs(): any {
  return (
    <footer className="aboutus" dir="rtl" aria-label="אודותינו וחיבור לרשתות">
      <div className="aboutus-inner container">
        <div className="aboutus-text-line">
          10PadelArena — פלטפורמה לניהול תחרויות פאדל.
        </div>

        <div
          className="aboutus-links-row"
          role="navigation"
          aria-label="קישורים לרשתות חברתיות"
        >
          <a
            className="social-link instagram"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            className="social-link youtube"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube aria-hidden="true" />
          </a>
          <a
            className="social-link facebook"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="aboutus-bottom">
        <div className="container small text-muted">
        {new Date().getFullYear()} ©   כל הזכויות שמורות - 10PadelArena 
        </div>
      </div>
    </footer>
  );
}
