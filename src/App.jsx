import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Components
import Sidebar from './components/Sidebar';
import BackgroundScene from './components/BackgroundScene';
import Footer from './components/Footer';

// Sections
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

// Lazy loaded components
const FloatingIcons = lazy(() => import('./components/FloatingIcons'));

function App() {
  useEffect(() => {
    // Preload 3D font for Text3D component
    const preloadFont = async () => {
      try {
        // Use a relative path instead of an absolute path
        const fontPath = 'fonts/inter_bold.json';
        const response = await fetch(fontPath);
        if (!response.ok) {
          console.error('Failed to preload font:', response.status);
        }
      } catch (error) {
        console.error('Error preloading font:', error);
      }
    };

    preloadFont();
  }, []);

  return (
    <>
      <BackgroundScene />
      
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        
        <main className="w-full md:w-5/6 md:ml-auto">
          <Home />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <About />
            <Education />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </motion.div>
          
          <Suspense fallback={null}>
            <FloatingIcons />
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
