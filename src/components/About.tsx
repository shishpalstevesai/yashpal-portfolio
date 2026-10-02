import React from 'react';
import { GraduationCap, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section section-divided">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="section-title">About Yashpal</h2>
          <p className="section-subtitle">
            Specialized Shopify engineering rooted in frontend accuracy, clean
            code standards, and reliable client collaboration.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="about-grid">
          {/* Left Large Statement */}
          <div className="reveal-on-scroll">
            <blockquote className="about-statement">
              "Focused on delivering websites that create a genuinely positive
              experience for clients, teams, and end users alike."
            </blockquote>

            <div style={{ marginTop: '2.5rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1.25rem',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-shopify)',
                  }}
                >
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Collaboration & Reliability
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                    Committed to seamless merchant workflows
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-content-right">
            {/* Primary Profile Box */}
            <div className="about-profile-box reveal-on-scroll stagger-1">
              <p className="about-profile-text">
                Shopify Developer with 4+ years of experience building,
                customizing, and migrating e-commerce storefronts. Skilled in
                converting Figma/PSD designs into responsive Shopify themes,
                working across Shopify Plus, and maintaining clean, reliable
                code. Focused on delivering websites that create a genuinely
                positive experience for clients, teams, and end users alike.
              </p>
            </div>

            {/* Core Capability Pillars */}
            <div className="about-highlights-grid">
              <div className="about-highlight-card reveal-on-scroll stagger-1">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={15} color="var(--accent-shopify)" />
                  <span className="about-highlight-title">Shopify & Shopify Plus</span>
                </div>
                <p className="about-highlight-desc">
                  Building modular, maintainable storefront themes across standard and enterprise stores.
                </p>
              </div>

              <div className="about-highlight-card reveal-on-scroll stagger-2">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={15} color="var(--accent-shopify)" />
                  <span className="about-highlight-title">Figma / PSD to Theme</span>
                </div>
                <p className="about-highlight-desc">
                  Translating visual concepts into pixel-accurate, responsive, high-performance liquid markup.
                </p>
              </div>

              <div className="about-highlight-card reveal-on-scroll stagger-3">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                  <CheckCircle2 size={15} color="var(--accent-shopify)" />
                  <span className="about-highlight-title">Storefront Migrations</span>
                </div>
                <p className="about-highlight-desc">
                  Transferring product databases, collections, and layouts onto Shopify with minimal downtime.
                </p>
              </div>

              <div className="about-highlight-card reveal-on-scroll stagger-4">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                  <ShieldCheck size={15} color="var(--accent-shopify)" />
                  <span className="about-highlight-title">Bug Fixing & Stability</span>
                </div>
                <p className="about-highlight-desc">
                  Diagnosing edge-case issues, liquid errors, styling glitches, and checkout inconsistencies.
                </p>
              </div>
            </div>

            {/* Education Box */}
            <div className="education-box reveal-on-scroll stagger-2">
              <div className="education-icon" aria-hidden="true">
                <GraduationCap size={28} />
              </div>
              <div>
                <div className="education-title">Bachelor of Computer Applications</div>
                <div className="education-institution">MCU Bhopal</div>
                <div className="education-period">2019 – 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
