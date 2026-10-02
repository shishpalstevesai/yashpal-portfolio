import React from 'react';
import {
  ShoppingBag,
  Sparkles,
  Palette,
  LayoutTemplate,
  ArrowRightLeft,
  Smartphone,
  Wrench,
} from 'lucide-react';
import { SERVICES } from '../data/services';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  '01': <ShoppingBag size={20} />,
  '02': <Sparkles size={20} />,
  '03': <Palette size={20} />,
  '04': <LayoutTemplate size={20} />,
  '05': <ArrowRightLeft size={20} />,
  '06': <Smartphone size={20} />,
  '07': <Wrench size={20} />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="section section-divided">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="section-eyebrow-dot" />
            <span>SPECIALIZED CAPABILITIES</span>
          </div>
          <h2 className="section-title">Services & expertise</h2>
          <p className="section-subtitle">
            Focused exclusively on the Shopify ecosystem, translating design fidelity,
            executing smooth store migrations, and building robust, responsive storefronts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {SERVICES.map((service, idx) => {
            const icon = SERVICE_ICONS[service.number] || <ShoppingBag size={20} />;

            return (
              <div key={service.number} className={`service-card reveal-on-scroll stagger-${(idx % 3) + 1}`}>
                <div>
                  <div className="service-card-top">
                    <span className="service-number">{service.number}</span>
                    <div className="service-icon-wrapper" aria-hidden="true">
                      {icon}
                    </div>
                  </div>

                  <h3 className="service-title">{service.title}</h3>

                  <p className="service-desc">{service.description}</p>
                </div>

                <div className="service-deliverables">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="deliverable-item">
                      <span className="deliverable-bullet" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
