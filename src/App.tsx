import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Assembly } from './components/Assembly';
import { Workspace } from './components/Workspace';
import { Lights } from './components/Lights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NebulaBackground } from './components/NebulaBackground';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';

import { HomeGallery } from './components/HomeGallery';

const HomePage: React.FC = () => (
  <>
    <NebulaBackground />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Assembly />
      <Lights />
      <Workspace />
      <Contact />
    </main>
    <Footer />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

