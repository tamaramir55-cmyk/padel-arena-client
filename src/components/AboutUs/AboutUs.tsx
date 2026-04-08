import React from "react";
import "./style.css";
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { INSTAGRAM_URL, YOUTUBE_URL, FACEBOOK_URL } from "../../utils/url";

const AboutUs = () => {
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
            className="social-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" />
          </a>
          <a
            className="social-link"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube aria-hidden="true" />
          </a>
          <a
            className="social-link"
            href={FACEBOOK_URL}
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
          © {new Date().getFullYear()} כל הזכויות שמורות — 10Padel
        </div>
      </div>
    </footer>
  );
};

export default AboutUs;
