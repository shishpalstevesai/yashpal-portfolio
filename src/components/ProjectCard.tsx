import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { StorefrontMockup } from './StorefrontMockup';

interface ProjectCardProps {
  project: Project;
  index: number;
  layout?: 'featured' | 'standard';
  reversed?: boolean;
  onInspect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  layout = 'standard',
  reversed = false,
  onInspect,
}) => {
  const formattedIndex = String(index + 1).padStart(2, '0');

  if (layout === 'featured') {
    return (
      <article className={`project-card-featured reveal-on-scroll ${reversed ? 'reversed' : ''}`}>
        {/* Left Information */}
        <div className="project-card-info">
          <div>
            <div className="project-meta-top">
              <span className="project-number">PROJECT {formattedIndex}</span>
              <span className="badge badge-shopify">{project.category}</span>
              {project.themeType && (
                <span className="badge" style={{ fontSize: '0.7rem' }}>
                  {project.themeType}
                </span>
              )}
            </div>

            <h3 className="project-name" style={{ marginTop: '0.85rem' }}>
              {project.name}
            </h3>

            <div className="project-headline">{project.title}</div>

            <p className="project-desc">{project.description}</p>
          </div>

          <div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-url-link"
              title={`Visit ${project.name} live store`}
            >
              <span>{project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
              <ExternalLink size={12} />
            </a>

            <div className="project-card-actions">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => onInspect(project)}
              >
                <span>View Details</span>
                <ArrowUpRight size={14} className="btn-arrow" />
              </button>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Visit Store</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Browser Visual */}
        <div className="project-card-visual">
          <StorefrontMockup project={project} onInspect={() => onInspect(project)} />
        </div>
      </article>
    );
  }

  // Standard Two-Column Card
  return (
    <article className={`project-card-standard reveal-on-scroll stagger-${(index % 2) + 1}`}>
      {/* Top Browser Visual */}
      <StorefrontMockup project={project} onInspect={() => onInspect(project)} compact={true} />

      {/* Bottom Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        <div className="project-meta-top">
          <span className="project-number">PROJECT {formattedIndex}</span>
          <span className="badge badge-shopify">{project.category}</span>
        </div>

        <h3 className="project-name" style={{ fontSize: '1.45rem' }}>
          {project.name}
        </h3>

        <div className="project-headline" style={{ fontSize: '0.95rem' }}>
          {project.title}
        </div>

        <p className="project-desc" style={{ fontSize: '0.9rem' }}>
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-url-link"
        >
          <span>{project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
          <ExternalLink size={12} />
        </a>

        <div className="project-card-actions" style={{ marginTop: '0.5rem' }}>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => onInspect(project)}
          >
            <span>View Details</span>
            <ArrowUpRight size={13} className="btn-arrow" />
          </button>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <span>Visit Store</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </article>
  );
};
