import './App.css';
import Homeinfo from './Page1Comp/Homeinfo';
import About from './Page2Comp/About';
import ProjectPage from './Page3Comp/Project';
import Skills from './Page4Comp/Skills';
import Contact from './Page5Comp/Contact';

function App() {
  return (
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
      <Homeinfo/>
      <div className="mainbody_footer">Scroll to discover<span class="material-symbols-outlined">
        keyboard_arrow_down
      </span></div>
    </div>
    <About/>
    <ProjectPage/>
    <Skills/>
    <Contact/>
    </>
  );
  
}

export default App;
