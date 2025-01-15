import React,{useEffect,useRef}from "react";
import './Skills.css';

function Skills(){
    const skillsTextRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => { 
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const textPosition = scrollPosition / windowHeight * 100;
            
            if (window.innerWidth > 576) {
                if (skillsTextRef.current) {
                    skillsTextRef.current.style.transform = `translateX(-${textPosition - 200}%)`;
                }
            } else {
                if (skillsTextRef.current) {
                    skillsTextRef.current.style.transform = `translateX(${textPosition - 264}%)`; 
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return(
        <div className="display-skills">
            <div className="animate-skills-text" ref={skillsTextRef}>SKILLS</div>
            <div className="skills-container">
                <div className="side-card top-card">
                    <div className="card">
                        <div>C/C++</div>
                        <div>Java</div>
                        <div>Python</div>
                    </div>
                    <div className="card">
                        <div>HTML, CSS & JS</div>
                        <div>React</div>
                        <div>Django</div>
                        <div>Flutter</div>
                    </div>
                    <div className="card">
                    <div>PHP</div>
                    <div>SQL</div>
                    </div>
                </div>
                <div className="side-card bottom-card">
                <div className="card">
                        <div>Product Development</div>
                        <div>Data Analysis</div>
                        <div>UI/UX Design</div>
                        <div>Project Management</div>
                    </div>
                    <div className="card">
                        <div>Firebase</div>
                        <div>PowerBI</div>
                        <div>GitHub</div>
                        <div>Figma</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills 