import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, Sun, Moon } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Initialize theme from DOM attribute or localStorage
  useEffect(() => {
    const currentTheme =
      (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') ||
      (localStorage.getItem('theme') as 'dark' | 'light') ||
      'dark';
    setTheme(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand */}
          <a href="#home" className="nav-brand" onClick={() => handleLinkClick('#home')}>
            <div className="nav-brand-logo" aria-hidden="true">
              YS
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-name">Yashpal Singh</span>
              <span className="nav-brand-role">Shopify Developer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            {/* Theme Toggle (Dark / Light) */}
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* LinkedIn Profile */}
            <a
              href="https://www.linkedin.com/in/yashpal-shopify-expert/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-link"
              title="Connect on LinkedIn"
              aria-label="Yashpal Singh LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="btn btn-primary btn-sm"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} className="btn-arrow" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Content */}
      <aside
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-header">
          <div className="nav-brand">
            <div className="nav-brand-logo" aria-hidden="true">
              YS
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-name">Yashpal Singh</span>
              <span className="nav-brand-role">Shopify Developer</span>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="mobile-nav-link"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="status-dot" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                Available for projects
              </span>
            </div>

            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <a
            href="https://www.linkedin.com/in/yashpal-shopify-expert/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
            }}
          >
            <LinkedinIcon size={15} color="#0a66c2" />
            <span>linkedin.com/in/yashpal-shopify-expert</span>
          </a>

          <a
            href="mailto:yashpalsingh2820@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Mail size={14} color="var(--accent-shopify)" />
            <span>yashpalsingh2820@gmail.com</span>
          </a>

          <a
            href="tel:+916264453197"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Phone size={14} color="var(--accent-shopify)" />
            <span>+91 6264453197</span>
          </a>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginTop: '0.25rem',
            }}
          >
            <MapPin size={13} />
            <span>Mandsaur, Madhya Pradesh, India</span>
          </div>
        </div>
      </aside>
    </>
  );
};
