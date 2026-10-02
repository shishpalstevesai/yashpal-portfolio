import React from 'react';
import { SKILLS } from '../data/skills';

export const Skills: React.FC = () => {
  const shopifySkills = SKILLS.filter(
    (s) => s.group === 'SHOPIFY & E-COMMERCE'
  );
  const frontendSkills = SKILLS.filter(
    (s) => s.group === 'FRONTEND DEVELOPMENT'
  );

  return (
    <section id="skills" className="section section-divided">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="section-title">Core technical skills</h2>
          <p className="section-subtitle">
            A transparent overview of Shopify e-commerce capabilities and frontend
            development tooling.
          </p>
        </div>

        {/* Skills Two-Group Container */}
        <div className="skills-container">
          {/* Group 1: Shopify & E-commerce */}
          <div className="skills-group reveal-on-scroll stagger-1">
            <div className="skills-group-header">
              <span className="skills-group-title">Shopify & E-Commerce</span>
              <span className="badge badge-shopify">7 Specialized Areas</span>
            </div>

            <div className="skills-list">
              {shopifySkills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-badge-expert">{skill.level}</span>
                  </div>
                  {skill.highlight && (
                    <p className="skill-highlight">{skill.highlight}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Frontend Development */}
          <div className="skills-group reveal-on-scroll stagger-2">
            <div className="skills-group-header">
              <span className="skills-group-title">Frontend Development</span>
              <span className="badge" style={{ fontSize: '0.72rem' }}>
                Standards & Templating
              </span>
            </div>

            <div className="skills-list">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span
                      className={
                        skill.level === 'Expert'
                          ? 'skill-badge-expert'
                          : 'skill-badge-intermediate'
                      }
                    >
                      {skill.level}
                    </span>
                  </div>
                  {skill.highlight && (
                    <p className="skill-highlight">{skill.highlight}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Note on Proficiency Standards */}
            <div
              style={{
                marginTop: '1.75rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-surface-muted)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-light)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}
            >
              <strong>Proficiency Note:</strong> Skill ratings strictly represent
              documented project experience and hands-on application across Shopify
              themes, migrations, and storefront maintenance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
