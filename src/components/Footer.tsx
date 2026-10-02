import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'All Projects', href: '#archive' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer-wrapper">
      <div className="container">
        {/* Top Footer Section */}
        <div className="footer-top">
          {/* Brand & Positioning */}
          <div className="footer-brand">
            <div className="nav-brand">
              <div className="nav-brand-logo" aria-hidden="true">
                YS
              </div>
              <div className="nav-brand-text">
                <span className="footer-brand-title">Yashpal Singh</span>
                <span className="nav-brand-role">Shopify Developer</span>
              </div>
            </div>

            <p className="footer-brand-desc">
              Shopify Developer with 4+ years of experience building, customizing,
              and migrating responsive e-commerce storefronts.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
              <span className="status-dot" aria-hidden="true" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                Based in Mandsaur, Madhya Pradesh, India
              </span>
            </div>
          </div>

          {/* Links & Contact Columns */}
          <div className="footer-links-group">
            {/* Navigation Column */}
            <div>
              <div className="footer-column-title">Navigation</div>
              <ul className="footer-links-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link-item">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact Column */}
            <div>
              <div className="footer-column-title">Direct Contact</div>
              <ul className="footer-links-list">
                <li>
                  <a
                    href="mailto:yashpalsingh2820@gmail.com"
                    className="footer-link-item"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Mail size={14} color="var(--accent-shopify)" />
                    <span>yashpalsingh2820@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+916264453197"
                    className="footer-link-item"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Phone size={14} color="var(--accent-shopify)" />
                    <span>+91 6264453197</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/yashpal-shopify-expert/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link-item"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <LinkedinIcon size={14} color="#0a66c2" />
                    <span>linkedin.com/in/yashpal-shopify-expert</span>
                  </a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <MapPin size={14} color="var(--accent-shopify)" />
                  <span>Mandsaur, Madhya Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="footer-bottom">
          <div>
            © {currentYear} Yashpal Singh. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.45rem 1rem', fontSize: '0.78rem' }}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
