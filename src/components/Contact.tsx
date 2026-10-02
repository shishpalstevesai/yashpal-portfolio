import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <section id="contact" className="section section-divided">
      <div className="container">
        <div className="contact-banner reveal-on-scroll">
          <div className="contact-banner-grid">
            {/* Left Headline */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent-shopify)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  fontWeight: 600,
                }}
              >
                <span className="status-dot" aria-hidden="true" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="contact-headline">
                Have a Shopify store
                <br />
                in mind?
              </h2>

              <p className="contact-subtitle">
                Let's build a storefront that feels as good as it works. Available
                for custom theme development, Shopify Plus architecture, migrations,
                and technical maintenance.
              </p>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href="mailto:yashpalsingh2820@gmail.com?subject=Shopify%20Storefront%20Project%20Inquiry"
                  className="btn btn-accent"
                  style={{ padding: '0.95rem 2.2rem' }}
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight size={17} className="btn-arrow" />
                </a>
              </div>
            </div>

            {/* Right Contact Cards */}
            <div className="contact-cards">
              {/* Email Card */}
              <div className="contact-card-item">
                <a
                  href="mailto:yashpalsingh2820@gmail.com"
                  className="contact-item-left"
                  style={{ textDecoration: 'none', flex: 1 }}
                >
                  <div className="contact-item-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">Direct Email</div>
                    <div className="contact-item-value">yashpalsingh2820@gmail.com</div>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard('yashpalsingh2820@gmail.com', 'email')}
                  className="modal-close-btn"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff' }}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <Check size={16} color="var(--accent-shopify)" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="contact-card-item">
                <a
                  href="tel:+916264453197"
                  className="contact-item-left"
                  style={{ textDecoration: 'none', flex: 1 }}
                >
                  <div className="contact-item-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">Telephone / WhatsApp</div>
                    <div className="contact-item-value">+91 6264453197</div>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard('+916264453197', 'phone')}
                  className="modal-close-btn"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff' }}
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check size={16} color="var(--accent-shopify)" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="contact-card-item">
                <a
                  href="https://www.linkedin.com/in/yashpal-shopify-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-left"
                  style={{ textDecoration: 'none', flex: 1 }}
                >
                  <div className="contact-item-icon" style={{ color: '#0a66c2' }}>
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">Professional Network</div>
                    <div className="contact-item-value">linkedin.com/in/yashpal-shopify-expert</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/yashpal-shopify-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-close-btn"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#fff' }}
                  title="Open LinkedIn in new tab"
                  aria-label="Open LinkedIn profile"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>

              {/* Location Card */}
              <div className="contact-card-item" style={{ cursor: 'default' }}>
                <div className="contact-item-left">
                  <div className="contact-item-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">Mandsaur, Madhya Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
