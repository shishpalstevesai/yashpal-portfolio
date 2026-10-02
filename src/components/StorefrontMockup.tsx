import React from 'react';
import { Lock, ShoppingBag, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface StorefrontMockupProps {
  project: Project;
  onInspect?: () => void;
  compact?: boolean;
}

export const StorefrontMockup: React.FC<StorefrontMockupProps> = ({
  project,
  onInspect,
  compact = false,
}) => {
  // Extract clean domain for address bar
  const domain = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="browser-frame" onClick={onInspect} style={{ cursor: onInspect ? 'pointer' : 'default' }}>
      {/* Browser Bar */}
      <div className="browser-header">
        <div className="browser-dots" aria-hidden="true">
          <span className="browser-dot" />
          <span className="browser-dot" />
          <span className="browser-dot" />
        </div>
        <div className="browser-address-bar" title={project.url}>
          <Lock className="lock-icon" />
          <span>https://{domain}</span>
        </div>
        <span className="badge badge-shopify" style={{ fontSize: '0.65rem', padding: '2px 6px' }}>
          {project.themeType || 'Shopify'}
        </span>
      </div>

      {/* Tasteful Architectural Storefront Representation */}
      <div
        className="storefront-mockup-inner"
        style={{
          minHeight: compact ? '190px' : '230px',
        }}
      >
        {/* Mockup Top Brand Header */}
        <div className="storefront-header-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: project.accentHue || 'var(--accent-shopify)',
              }}
            />
            <span className="storefront-brand-mark">{project.name}</span>
          </div>

          <div className="storefront-nav-pills" aria-hidden="true">
            <span className="storefront-pill" style={{ width: '22px' }} />
            <span className="storefront-pill" style={{ width: '32px' }} />
            <span className="storefront-pill" style={{ width: '26px' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-surface-muted)',
                color: 'var(--text-secondary)',
                marginLeft: '6px',
              }}
            >
              <ShoppingBag size={11} />
            </div>
          </div>
        </div>

        {/* Hero Banner Wireframe */}
        <div className="storefront-hero-wireframe">
          <div className="storefront-badge-tag">{project.category}</div>
          <div
            className="storefront-wireframe-line"
            style={{
              width: '60%',
              backgroundColor: project.accentHue || 'var(--accent-shopify)',
              opacity: 0.85,
              height: '9px',
            }}
          />
          <div className="storefront-wireframe-line medium" style={{ opacity: 0.6 }} />
          <div className="storefront-wireframe-line short" style={{ opacity: 0.4 }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.25rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
              }}
            >
              <CheckCircle2 size={11} color="var(--accent-shopify)" /> Verified Storefront
            </span>
          </div>
        </div>

        {/* Product Cards Row */}
        {!compact && (
          <div className="storefront-product-grid" aria-hidden="true">
            <div className="storefront-product-card">
              <div className="storefront-wireframe-line short" style={{ height: '5px' }} />
              <div className="storefront-wireframe-line" style={{ height: '4px', width: '30%' }} />
            </div>
            <div className="storefront-product-card">
              <div className="storefront-wireframe-line short" style={{ height: '5px' }} />
              <div className="storefront-wireframe-line" style={{ height: '4px', width: '30%' }} />
            </div>
            <div className="storefront-product-card">
              <div className="storefront-wireframe-line short" style={{ height: '5px' }} />
              <div className="storefront-wireframe-line" style={{ height: '4px', width: '30%' }} />
            </div>
          </div>
        )}

        {/* Hover / Inspect Hint */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.5rem',
            borderTop: '1px solid var(--border-light)',
            marginTop: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-secondary)',
              letterSpacing: '0.04em',
            }}
          >
            SHOPIFY STOREFRONT ARCHITECTURE
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--accent-shopify)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2px',
              fontWeight: 600,
            }}
          >
            VIEW DETAILS <ArrowUpRight size={11} />
          </span>
        </div>
      </div>
    </div>
  );
};
