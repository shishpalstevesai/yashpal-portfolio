import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/process';

export const Process: React.FC = () => {
  return (
    <section id="process" className="section section-divided">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            <span>METHODOLOGY</span>
          </div>
          <h2 className="section-title">How I work</h2>
          <p className="section-subtitle">
            A disciplined, step-by-step workflow focused on design fidelity, code
            quality, thorough testing, and seamless deployment.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="process-grid">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className={`process-card reveal-on-scroll stagger-${(idx % 4) + 1}`}>
              <div className="process-step-num">
                <span>PHASE {step.step}</span>
                {idx < PROCESS_STEPS.length - 1 && (
                  <ArrowRight size={14} style={{ opacity: 0.5 }} />
                )}
              </div>

              <h3 className="process-step-title">{step.title}</h3>

              <p className="process-step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
