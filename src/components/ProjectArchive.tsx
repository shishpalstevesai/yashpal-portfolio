import React, { useState, useMemo } from 'react';
import { Search, LayoutGrid, List, ExternalLink, ArrowUpRight, X } from 'lucide-react';
import { Project, ProjectCategory } from '../types';

interface ProjectArchiveProps {
  projects: Project[];
  onInspectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Fashion',
  'Beauty',
  'Jewellery',
  'Home & Lifestyle',
  'Food / Wellness',
  'Gardening',
  'Technology',
  'Other E-commerce',
];

export const ProjectArchive: React.FC<ProjectArchiveProps> = ({
  projects,
  onInspectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        project.name.toLowerCase().includes(query) ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.url.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="archive" className="section section-divided">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            <span>COMPLETE PORTFOLIO REPOSITORY</span>
          </div>
          <h2 className="section-title">All storefronts</h2>
          <p className="section-subtitle">
            An extensive index of 39 Shopify and Shopify Plus storefronts across
            fashion, beauty, home, gardening, technology, and specialized e-commerce.
          </p>
        </div>

        {/* Filter & Search Controls */}
        <div className="archive-controls">
          {/* Top Search Bar & View Mode Toggle */}
          <div className="archive-search-row">
            <div className="search-input-wrapper">
              <Search className="search-input-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search by store name, domain, industry, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search all projects"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="archive-view-toggle" role="group" aria-label="View layout switch">
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid layout"
              >
                <LayoutGrid size={15} />
                <span>Grid</span>
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
                onClick={() => setViewMode('table')}
                aria-label="Table layout"
              >
                <List size={15} />
                <span>Table</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="filter-pills-row" role="tablist" aria-label="Filter by industry category">
            {CATEGORIES.map((category) => {
              const count =
                category === 'All'
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === category}
                  className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span>{category}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      opacity: 0.8,
                      marginLeft: '4px',
                    }}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stats Bar */}
          <div className="archive-stats-bar">
            <span>
              Showing {filteredProjects.length} of {projects.length} verified projects
            </span>
            <span>Shopify / Shopify Plus Storefronts</span>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-medium)',
            }}
          >
            <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              No storefronts match "{searchQuery}" in {selectedCategory}.
            </p>
            <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
              Try clearing your search query or selecting a different industry filter.
            </p>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              style={{ marginTop: '1.5rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View Mode: Grid */}
        {viewMode === 'grid' && filteredProjects.length > 0 && (
          <div className="archive-grid">
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className={`archive-card reveal-on-scroll stagger-${(idx % 4) + 1}`}>
                <div>
                  <div className="archive-card-header">
                    <div>
                      <span className="badge badge-shopify" style={{ marginBottom: '0.5rem' }}>
                        {project.category}
                      </span>
                      <h3 className="archive-card-name">{project.name}</h3>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginTop: '0.35rem',
                    }}
                  >
                    {project.title}
                  </div>

                  <p className="archive-card-desc" style={{ marginTop: '0.5rem' }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-url-link"
                      style={{ width: '100%', justifyContent: 'space-between' }}
                    >
                      <span>{project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <div className="archive-card-footer">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => onInspectProject(project)}
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Inspect Details</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Mode: Table */}
        {viewMode === 'table' && filteredProjects.length > 0 && (
          <div className="archive-table-wrapper">
            <table className="archive-table">
              <thead>
                <tr>
                  <th style={{ width: '50px' }}>#</th>
                  <th>Store Name</th>
                  <th>Industry</th>
                  <th>Description</th>
                  <th>Store URL</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project, idx) => (
                  <tr key={project.id}>
                    <td
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </td>
                    <td>
                      <div className="archive-table-name">{project.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {project.themeType || 'Shopify'}
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-shopify">{project.category}</span>
                    </td>
                    <td style={{ maxWidth: '340px' }}>
                      <div
                        style={{
                          fontSize: '0.86rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.45,
                        }}
                      >
                        {project.description}
                      </div>
                    </td>
                    <td>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-url-link"
                      >
                        <span>{project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                        <ExternalLink size={11} />
                      </a>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => onInspectProject(project)}
                          style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                        >
                          Details
                        </button>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                          style={{ padding: '0.4rem 0.75rem', fontSize: '0.8rem' }}
                          title={`Visit ${project.name}`}
                        >
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
