import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ShieldCheck, Globe, Layers } from 'lucide-react';
import { Project } from '../types';
import { StorefrontMockup } from './StorefrontMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="modal-content" ref={modalRef}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge badge-shopify">{project.category}</span>
            <span className="badge" style={{ fontSize: '0.7rem' }}>
              {project.themeType || 'Shopify Storefront'}
            </span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Main Visual Mockup */}
          <StorefrontMockup project={project} />

          {/* Project Details */}
          <div>
            <h2
              id="modal-project-title"
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
              }}
            >
              {project.name}
            </h2>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginTop: '0.35rem',
              }}
            >
              {project.title}
            </div>

            <p
              style={{
                fontSize: '1.02rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginTop: '0.85rem',
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Technical Scope Highlights (Strictly based on documented capabilities) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              backgroundColor: 'var(--bg-surface-muted)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <Layers size={18} color="var(--accent-shopify)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  E-Commerce Platform
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Shopify & Theme Architecture
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <ShieldCheck size={18} color="var(--accent-shopify)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Quality Standards
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Responsive & Cross-Browser Tested
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <Globe size={18} color="var(--accent-shopify)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Storefront Status
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Production E-Commerce Build
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-light)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                }}
              >
                URL:
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                }}
              >
                {project.url}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onClose}
              >
                Close
              </button>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>Visit Live Storefront</span>
                <ExternalLink size={14} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
