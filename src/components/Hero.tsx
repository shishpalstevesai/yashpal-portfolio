import React from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Code2,
  Layers,
  CheckCircle2,
  Download,
  FileText,
} from 'lucide-react';
import { LinkedinIcon } from './LinkedinIcon';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Editorial Content */}
          <div className="hero-content">
            <div className="hero-status-wrapper">
              <span className="status-indicator">
                <span className="status-dot" aria-hidden="true" />
                <span>Available for Builds & Migrations</span>
              </span>
              <span className="hero-eyebrow">
                SHOPIFY DEVELOPER · E-COMMERCE · FRONTEND
              </span>
            </div>

            <h1 className="hero-headline">
              Shopify stores,
              <br />
              built to feel
              <br />
              <span className="highlight">remarkable.</span>
            </h1>

            <p className="hero-description">
              Shopify Developer with 4+ years of experience building, customizing,
              and migrating responsive e-commerce storefronts.
            </p>

            {/* Location & Verified LinkedIn Profile Chip */}
            <div className="hero-meta-row">
              <div className="hero-location">
                <MapPin size={15} color="var(--accent-shopify)" />
                <span>Mandsaur, Madhya Pradesh, India</span>
              </div>

              <a
                href="https://www.linkedin.com/in/yashpal-shopify-expert/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-chip"
                title="View LinkedIn Profile"
              >
                <LinkedinIcon size={13} color="#0a66c2" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={12} />
              </a>
            </div>

            {/* CTAs with Prominent Resume Download Button */}
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onExploreWork}
              >
                <span>View Selected Work</span>
                <ArrowDown size={16} className="btn-arrow" />
              </button>

              <a
                href="/Yashpal_Singh_Shopify_Developer_Resume.pdf"
                download="Yashpal_Singh_Shopify_Developer_Resume.pdf"
                className="btn btn-resume"
                title="Download Yashpal Singh's Official Resume"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onContactClick}
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Visual: Enhanced Developer Studio & Scorecard UI */}
          <div className="hero-visual" aria-hidden="true">
            {/* Main Interactive Control Card */}
            <div className="hero-card-main">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                </div>
                <div className="browser-address-bar">
                  <span>shopify.storefront / theme.liquid</span>
                </div>
                <span className="badge badge-shopify">Online Store 2.0</span>
              </div>

              <div className="hero-card-preview">
                <div>
                  {/* Developer Card Header */}
                  <div className="hero-card-user-row">
                    <div className="hero-card-user-info">
                      <div className="hero-card-user-avatar">
                        YS
                      </div>
                      <div>
                        <div className="hero-card-user-name">
                          Yashpal Singh
                        </div>
                        <div className="hero-card-user-role">
                          Senior Shopify Developer
                        </div>
                      </div>
                    </div>

                    <span className="badge badge-shopify" style={{ fontSize: '0.68rem' }}>
                      Shopify Plus Ready
                    </span>
                  </div>

                  {/* 3 Metric Scorecard Stats */}
                  <div className="hero-card-stats">
                    <div className="hero-stat-box">
                      <div className="hero-stat-value">4+</div>
                      <div className="hero-stat-label">Years Exp</div>
                    </div>
                    <div className="hero-stat-box">
                      <div className="hero-stat-value" style={{ color: 'var(--accent-shopify)' }}>
                        39
                      </div>
                      <div className="hero-stat-label">Storefronts</div>
                    </div>
                    <div className="hero-stat-box">
                      <div className="hero-stat-value">0 min</div>
                      <div className="hero-stat-label">Migration Lag</div>
                    </div>
                  </div>

                  {/* Clean Technical Liquid / HTML Code Fragment */}
                  <div className="hero-code-snippet">
                    <span className="comment">&#47;&#47; Custom Shopify Theme Section</span>
                    <br />
                    <span className="keyword">&#123;%</span> <span className="tag">schema</span>{' '}
                    <span className="keyword">%&#125;</span>
                    <br />
                    &nbsp;&nbsp;<span className="attr">"name"</span>:{' '}
                    <span className="string">"Hero Editorial Showcase"</span>,
                    <br />
                    &nbsp;&nbsp;<span className="attr">"settings"</span>: [
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#123; <span className="attr">"type"</span>:{' '}
                    <span className="string">"product_list"</span>, <span className="attr">"id"</span>:{' '}
                    <span className="string">"collection"</span> &#125;
                    <br />
                    &nbsp;&nbsp;]
                    <br />
                    <span className="keyword">&#123;%</span> <span className="tag">endschema</span>{' '}
                    <span className="keyword">%&#125;</span>
                  </div>
                </div>

                {/* Card Bottom Quick Action */}
                <div className="hero-card-footer">
                  <div className="hero-card-footer-pill">
                    <CheckCircle2 size={14} color="var(--accent-shopify)" />
                    <span>Responsive · Pixel-Accurate</span>
                  </div>

                  <a
                    href="/Yashpal_Singh_Shopify_Developer_Resume.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-card-cv-link"
                  >
                    <FileText size={12} />
                    <span>Preview CV</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Floating Detail Badges */}
            <div className="hero-floating-badge hero-floating-badge-1">
              <div className="hero-badge-icon">
                <Code2 size={18} />
              </div>
              <div>
                <div className="hero-badge-title">4+ Years Experience</div>
                <div className="hero-badge-subtitle">Shopify & Shopify Plus</div>
              </div>
            </div>

            <div className="hero-floating-badge hero-floating-badge-2">
              <div
                className="hero-badge-icon"
                style={{ backgroundColor: 'rgba(37, 99, 235, 0.12)', color: '#3b82f6' }}
              >
                <Layers size={18} />
              </div>
              <div>
                <div className="hero-badge-title">Figma → Shopify</div>
                <div className="hero-badge-subtitle">Pixel-Accurate Builds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
