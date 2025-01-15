import React, { useState, useEffect } from 'react';
import './App.css';
import Homeinfo from './Page1Comp/Homeinfo';
import About from './Page2Comp/About';
import ProjectPage from './Page3Comp/Project';
import Skills from './Page4Comp/Skills';
import Contact from './Page5Comp/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderHidden, setLoaderHidden] = useState(false);

  useEffect(() => {
    // Simulate a loading delay (optional, but good for demo)
    setTimeout(() => {
      setLoaderHidden(true); // Start the transition
      setTimeout(() => {
          setLoading(false);
      }, 500); // Wait for the transition animation to complete before removing the loader
    }, 2000);

    // You can also remove the setTimeOut to check instant render.
  }, []);

  return (
    <>
      {loading ? (
        <div className={`loader-container ${loaderHidden ? 'hidden' : ''}`}>
          <div className="loader">
            <div className="letter-s">
              <div className="fill"></div>
            </div>
          </div>
        </div>
      ) : (
          <>
           <div className="mainbody">
               <div className="first_ball"></div>
                <header>
                   <div className="name"></div>
                    <nav>
                        <ul className="nav_links">
                            <li></li>
                        </ul>
                    </nav>
                </header>
                <Homeinfo />
               <div className="mainbody_footer">
                    <div className="cv"><a href="final_resume.pdf" download="Sai_Resume.pdf">Download CV<span class="material-symbols-outlined">
                        download
                    </span></a></div>
                    <div className="scroll-to-discover">
                        Scroll to discover<span class="material-symbols-outlined bounce">
                        keyboard_arrow_down
                        </span>
                    </div>
                </div>
            </div>
            <About />
            <ProjectPage />
           <Skills />
            <Contact />
          </>
      )}
    </>
  );
}

export default App;