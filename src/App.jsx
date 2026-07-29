import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import LoadingFallback from './components/LoadingFallback.jsx';
import './components/Style/index.css';

// Lazy-load heavier components for faster initial load
const Header = lazy(() => import('./components/Header.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

function App() {
  return (
    <>
      {/* Skip link for keyboard users */}
      <a className="skip-link" href="#main-content">Skip to content</a>

      <Navigation />

      <ErrorBoundary>
        <main id="main-content" className="main-content" role="main">
          <Suspense fallback={<LoadingFallback />}>
            <section id="header" aria-label="Header">
              <Header />
            </section>

            <section id="about" aria-label="About">
              <About />
            </section>

            <section id="skills" aria-label="Skills">
              <Skills />
            </section>

            <section id="projects" aria-label="Projects">
              <Projects />
            </section>

            <section id="contact" aria-label="Contact">
              <Contact />
            </section>
          </Suspense>
        </main>
      </ErrorBoundary>
    </>
  );
}

export default App;