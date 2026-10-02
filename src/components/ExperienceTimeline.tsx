import React, { useRef, useState, useEffect } from 'react';
import { CheckCircle2, Building, Calendar, MapPin, Sparkles, Compass } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [reachedIndices, setReachedIndices] = useState<boolean[]>([true, false, false]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const viewportHeight = window.innerHeight;
          const triggerPoint = viewportHeight * 0.52; // Focal activation line

          const firstEl = itemRefs.current[0];
          const lastEl = itemRefs.current[itemRefs.current.length - 1];

          if (firstEl && lastEl) {
            const firstRect = firstEl.getBoundingClientRect();
            const lastRect = lastEl.getBoundingClientRect();

            // Total distance between first milestone and last milestone
            const totalSpan = lastRect.top - firstRect.top;
            const traveled = triggerPoint - firstRect.top;

            let progress = 0;
            if (totalSpan > 0) {
              progress = Math.min(Math.max(traveled / totalSpan, 0), 1);
            }
            setScrollProgress(progress);

            // Reached milestones: each milestone lights up when crossing triggerPoint
            const reached = itemRefs.current.map((el, idx) => {
              if (!el) return idx === 0;
              const itemRect = el.getBoundingClientRect();
              return itemRect.top <= triggerPoint;
            });

            // Milestone 01 defaults to active when user scrolls close to the section
            if (firstRect.top <= viewportHeight * 0.72) {
              reached[0] = true;
            }
            setReachedIndices(reached);

            // Current active milestone is the most recently reached milestone
            const lastReached = reached.lastIndexOf(true);
            setActiveIndex(lastReached >= 0 ? lastReached : 0);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToMilestone = (index: number) => {
    const el = itemRefs.current[index];
    if (el) {
      const yOffset = -window.innerHeight * 0.22;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const milestoneMeta = [
    { label: 'ControlF5 (Current)', tenure: 'Present', tag: 'Shopify & Shopify Plus' },
    { label: 'Mandasa Technologies', tenure: '2022–2023', tag: 'Theme Builds' },
    { label: 'Freelance Builds', tenure: '2021', tag: 'Direct Storefronts' },
  ];

  return (
    <section id="experience" className="section section-divided">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="section-title">Professional experience</h2>
          <p className="section-subtitle">
            4+ years of hands-on Shopify development, theme customization,
            and production storefront maintenance across agencies and client brands.
          </p>
        </div>

        {/* Scroll-Driven Interactive Timeline Wrapper */}
        <div className="timeline-interactive-wrapper">
          {/* Top Interactive Milestone Navigation Bar */}
          <div className="timeline-nav-bar" aria-label="Career Milestones Navigation">
            <div className="timeline-milestone-tabs">
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginRight: '0.25rem',
                }}
              >
                <Compass size={13} color="var(--accent-shopify)" />
                <span>Jump to:</span>
              </span>

              {EXPERIENCES.map((exp, idx) => (
                <button
                  key={`${exp.company}-${idx}`}
                  type="button"
                  className={`timeline-milestone-tab ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => scrollToMilestone(idx)}
                  title={`Scroll to ${exp.company}`}
                >
                  <span>0{idx + 1}</span>
                  <span>{exp.company}</span>
                </button>
              ))}
            </div>

            {/* Scroll Progress Meter */}
            <div className="timeline-progress-indicator">
              <span>Scroll Progress:</span>
              <div className="timeline-progress-bar-mini" title={`Timeline: ${Math.round(scrollProgress * 100)}% explored`}>
                <div
                  className="timeline-progress-fill-mini"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)', minWidth: '32px' }}>
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>
          </div>

          {/* Vertical Dynamic Timeline Track */}
          <div ref={containerRef} className="timeline-container">
            {/* Background Base Track Line with Nested Glowing Progress Fill */}
            <div className="timeline-track-base" aria-hidden="true">
              <div
                className="timeline-track-fill"
                style={{
                  height: `${Math.round(scrollProgress * 100)}%`,
                }}
              >
                {scrollProgress > 0.02 && <div className="timeline-glow-cursor" />}
              </div>
            </div>

            {EXPERIENCES.map((exp, idx) => {
              const isReached = reachedIndices[idx];
              const isActive = activeIndex === idx;
              const meta = milestoneMeta[idx] || { tag: 'Shopify Milestone' };

              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  className={`timeline-item ${isReached ? 'reached' : ''} ${isActive ? 'active' : ''} ${
                    exp.isCurrent ? 'current' : ''
                  }`}
                >
                  {/* Interactive Marker Node */}
                  <div
                    className="timeline-marker-node"
                    aria-hidden="true"
                    title={`Milestone 0${idx + 1}`}
                  >
                    0{idx + 1}
                  </div>

                  {/* Career Role Card */}
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                          <h3 className="timeline-role">{exp.role}</h3>
                          {isActive && (
                            <span
                              className="badge badge-shopify"
                              style={{
                                fontSize: '0.68rem',
                                padding: '2px 8px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px',
                              }}
                            >
                              <Sparkles size={11} />
                              <span>Active Milestone</span>
                            </span>
                          )}
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            gap: '0.85rem',
                          }}
                        >
                          <span
                            className="timeline-company"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                          >
                            <Building size={14} color="var(--accent-shopify)" />
                            <span>{exp.company}</span>
                          </span>

                          {exp.location && (
                            <span
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem',
                                fontSize: '0.85rem',
                                color: 'var(--text-muted)',
                              }}
                            >
                              <MapPin size={12} />
                              <span>{exp.location}</span>
                            </span>
                          )}

                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.72rem',
                              color: 'var(--accent-shopify)',
                              backgroundColor: 'var(--accent-subtle)',
                              padding: '2px 6px',
                              borderRadius: '4px',
                            }}
                          >
                            {meta.tag}
                          </span>
                        </div>
                      </div>

                      <div
                        className="timeline-period"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                      >
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="timeline-responsibilities">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <div key={respIdx} className="timeline-responsibility-item">
                          <CheckCircle2 size={16} className="timeline-check-icon" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
