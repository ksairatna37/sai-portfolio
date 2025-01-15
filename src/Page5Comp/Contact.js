import React,{useEffect,useRef}from "react";
import './Contact.css';
import '../Page4Comp/Skills.css';
import linkdin from '../Page5Comp/icons/linkdin.svg';
import git from '../Page5Comp/icons/git.svg';
import mail from '../Page5Comp/icons/mail.svg';


function Contact(){
    const skillsTextRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => { 
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const textPosition = scrollPosition / windowHeight * 100;
            
            if (window.innerWidth > 576) {
                if (skillsTextRef.current) {
                    skillsTextRef.current.style.transform = `translateX(${textPosition - 350}%)`;
                }
            } else {
                if (skillsTextRef.current) {
                    skillsTextRef.current.style.transform = `translateX(${textPosition - 383}%)`; 
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
            <div className="animate-contact-text" ref={skillsTextRef}>CONTACT</div>
            <div className="skills-container contact-container">
               <a href="mailto:ksairatna37@gmail.com"><img src={mail} alt="mail"/></a>
               <a href="https://www.linkedin.com/in/sairatna-kamble-95b546237/" target="_blank" rel="noreferrer"><img src={linkdin} alt="linkdin" /></a>
               <a href="https://github.com/ksairatna37" target="_blank" rel="noreferrer"><img src={git} alt="git" /></a>
            </div>
        </div>
    );
}

export default Contact 