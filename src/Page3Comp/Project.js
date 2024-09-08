import React, { useEffect } from "react";
import './Project.css';
import '../App.css';
import Projects from "./ProjectsDetails";

function ProjectPage() {
    useEffect(() => {
        const handleWorkScroll = () => {
            const worktitle = document.querySelector('.worktitlename');
            const projectSection = document.querySelector('.ProjectPage');

            const projectMiddleInView = projectSection
                ? window.scrollY + window.innerHeight >= projectSection.offsetTop + projectSection.offsetHeight / 2
                : false;
          
            
            if (projectMiddleInView) {
                worktitle.classList.add('slide-right');
            }
            if (!projectMiddleInView) {
                worktitle.classList.remove('slide-right');
            }
       
        };
        window.addEventListener('scroll', handleWorkScroll);
        return () => {
            window.removeEventListener('scroll', handleWorkScroll);
        };
    }, []);
    return (
        <>
            <div className="ProjectPage AboutPageMainBody">
                <header className="projectheader">
                    <div className="name worktitlename">WORKS</div>
                </header>
                <div className="ProjectSection">
                    <Projects />
                </div>
            </div>
        </>
    );
}


export default ProjectPage