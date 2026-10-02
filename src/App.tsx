import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CapabilityStrip } from './components/CapabilityStrip';
import { SelectedWork } from './components/SelectedWork';
import { ProjectArchive } from './components/ProjectArchive';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ALL_PROJECTS } from './data/projects';
import { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Featured 8 projects for Selected Work
  const featuredProjects = ALL_PROJECTS.slice(0, 8);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'home',
      'work',
      'archive',
      'services',
      'skills',
      'about',
      'experience',
      'process',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-60px 0px -40% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Global scroll reveal observer for animated components
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const attachObservers = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      elements.forEach((el) => revealObserver.observe(el));
    };

    attachObservers();

    // Observe dynamically mounted elements or tab switches
    const mutationObserver = new MutationObserver(() => {
      attachObservers();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToArchive = () => {
    const el = document.getElementById('archive');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app">
      {/* Global Sticky / Floating Navigation */}
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          onExploreWork={scrollToWork}
          onContactClick={scrollToContact}
        />

        {/* 2. Capability Marquee Strip */}
        <CapabilityStrip />

        {/* 3. Selected Work Section */}
        <SelectedWork
          featuredProjects={featuredProjects}
          onInspectProject={setSelectedProject}
          onExploreAll={scrollToArchive}
        />

        {/* 4. Complete 39-Project Archive */}
        <ProjectArchive
          projects={ALL_PROJECTS}
          onInspectProject={setSelectedProject}
        />

        {/* 5. Services Section */}
        <Services />

        {/* 6. Skills Section */}
        <Skills />

        {/* 7. About Section */}
        <About />

        {/* 8. Experience Timeline */}
        <ExperienceTimeline />

        {/* 9. Development Process ("How I Work") */}
        <Process />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 11. Minimalist Footer */}
      <Footer />

      {/* 12. Accessible Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 13. Direct Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
