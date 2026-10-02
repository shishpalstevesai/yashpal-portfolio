import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

interface SelectedWorkProps {
  featuredProjects: Project[];
  onInspectProject: (project: Project) => void;
  onExploreAll: () => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  featuredProjects,
  onInspectProject,
  onExploreAll,
}) => {
  // We feature 8 projects in the top selected work:
  // p0: Hospitrade (Featured)
  // p1 & p2: Flynker & Caredale (2-col)
  // p3: Divinelane (Featured, reversed)
  // p4 & p5: Soqo & Aerigo (2-col)
  // p6 & p7: Aurrelis & Urban Den (2-col)

  const p0 = featuredProjects[0];
  const p1 = featuredProjects[1];
  const p2 = featuredProjects[2];
  const p3 = featuredProjects[3];
  const p4 = featuredProjects[4];
  const p5 = featuredProjects[5];
  const p6 = featuredProjects[6];
  const p7 = featuredProjects[7];

  return (
    <section id="work" className="section section-divided">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            A selection of Shopify storefronts designed, built, customized, or
            maintained.
          </p>
        </div>

        {/* Varied Editorial Layout Grid */}
        <div className="selected-work-grid">
          {/* Project 01: Large Horizontal Feature */}
          {p0 && (
            <ProjectCard
              project={p0}
              index={0}
              layout="featured"
              onInspect={onInspectProject}
            />
          )}

          {/* Project 02 & 03: Two-Column Grid */}
          {(p1 || p2) && (
            <div className="selected-work-two-col">
              {p1 && (
                <ProjectCard
                  project={p1}
                  index={1}
                  layout="standard"
                  onInspect={onInspectProject}
                />
              )}
              {p2 && (
                <ProjectCard
                  project={p2}
                  index={2}
                  layout="standard"
                  onInspect={onInspectProject}
                />
              )}
            </div>
          )}

          {/* Project 04: Large Feature (Reversed) */}
          {p3 && (
            <ProjectCard
              project={p3}
              index={3}
              layout="featured"
              reversed={true}
              onInspect={onInspectProject}
            />
          )}

          {/* Project 05 & 06: Two-Column Grid */}
          {(p4 || p5) && (
            <div className="selected-work-two-col">
              {p4 && (
                <ProjectCard
                  project={p4}
                  index={4}
                  layout="standard"
                  onInspect={onInspectProject}
                />
              )}
              {p5 && (
                <ProjectCard
                  project={p5}
                  index={5}
                  layout="standard"
                  onInspect={onInspectProject}
                />
              )}
            </div>
          )}

          {/* Project 07 & 08: Two-Column Grid */}
          {(p6 || p7) && (
            <div className="selected-work-two-col">
              {p6 && (
                <ProjectCard
                  project={p6}
                  index={6}
                  layout="standard"
                  onInspect={onInspectProject}
                />
              )}
              {p7 && (
                <ProjectCard
                  project={p7}
                  index={7}
                  layout="standard"
                  onInspect={onInspectProject}
                />
              )}
            </div>
          )}
        </div>

        {/* Bottom CTA to Archive */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onExploreAll}
            style={{ padding: '0.95rem 2rem' }}
          >
            <span>Explore Complete 39-Project Archive</span>
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
