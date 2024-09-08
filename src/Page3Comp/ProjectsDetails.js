
import React, { useEffect, useRef } from "react";
import './ProjectDetails.css';
import project1Image1 from '../Page3Comp/Images/Work1/img1.jpg';
import project1Image2 from '../Page3Comp/Images/Work1/img2.jpg';
import project1video1 from '../Page3Comp/Images/Work1/vid1.mp4';

import project2Image1 from '../Page3Comp/Images/Work2/img1.png';
import project2Image3 from '../Page3Comp/Images/Work2/img3.png';
import project2Image4 from '../Page3Comp/Images/Work2/img4.png';
import project2Image5 from '../Page3Comp/Images/Work2/img5.png';

import project3Image1 from '../Page3Comp/Images/Work3/img1.png';
import project3Image2 from '../Page3Comp/Images/Work3/img2.png';
import project3Image3 from '../Page3Comp/Images/Work3/img3.png';
import project3Image4 from '../Page3Comp/Images/Work3/img4.png';
import project3Image5 from '../Page3Comp/Images/Work3/img5.png';
import project3Image6 from '../Page3Comp/Images/Work3/img6.png';

import project4Image1 from '../Page3Comp/Images/Work4/img1.png';
import project4Image2 from '../Page3Comp/Images/Work4/img2.png';
import project4Image3 from '../Page3Comp/Images/Work4/img3.png';
import project4Image4 from '../Page3Comp/Images/Work4/img4.png';
import project4Image5 from '../Page3Comp/Images/Work4/img5.png';
import project4Image6 from '../Page3Comp/Images/Work4/img6.png';
import project4Image7 from '../Page3Comp/Images/Work4/img7.png';
import project4Image8 from '../Page3Comp/Images/Work4/img8.png';
import project4Image9 from '../Page3Comp/Images/Work4/img9.png';




function Projects() {

    const projectRefs = useRef([]);

    useEffect(() => {
        const currentRefs = projectRefs.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                } else {
                    entry.target.style.opacity = 0;
                }
            });
        }, { threshold: 0.9 });

        currentRefs.forEach((ref) => {
            observer.observe(ref);
        });

        return () => {
            currentRefs.forEach((ref) => {
                observer.unobserve(ref);
            });
        };
    }, []);

    const projects = [
        {
            id: "01",
            title: "CRM Software",
            role: "Full Stack Developer",
            description: "Real world project, developed using Flutter, integrating multiple databases and functionalities such as payroll management and HR operations. Managed the entire lifecycle from development to deployment on Firebase",
            type: "Web App",
            link: "#",
            images: [
                project4Image1,
                project4Image2,
                project4Image3,
                project4Image4,
                project4Image5,
                project4Image6,
                project4Image7,
                project4Image8,
                project4Image9,
            ],
        },
        {
            id: "02",
            title: "Weather Insight System",
            role: "Frontend Developer",
            description: "Real-time weather site with responsive design,leveraging OpenWeatherMap API for real-time data retrieval",
            type: "Web App",
            link: "https://github.com/ksairatna37/Vatavaran",
            images: [
                project1Image1,
                project1Image2,
            ],
            video:[project1video1]
        },
        {
            id: "03",
            title: " RailSafar Train Reservation System",
            role: "Frontend Developer",
            description: "Effortlessly explore train schedules, check seat availability, and obtain train timings. Inquire about fares, discover routes between stations, and enjoy the convenience of secure online seat reservations",
            type: "Website",
            link: "https://github.com/Samb30/RailSafar-Train-Reservation-System",
            images: [
                project2Image1,
                project2Image3,
                project2Image4,
                project2Image5,
            ]
        },
        {
            id: "04",
            title: "Marvel Site Clone",
            role: "Frontend Developer 🟣 Team Leader",
            description: "Developed as an End-semester project Marvel-inspired website with a secure login/signup system using a local XAMPP server database",
            type: "Website",
            link: "https://github.com/ksairatna37/Marvel_FanWeb",
            images: [
                project3Image1,
                project3Image2,
                project3Image3,
                project3Image4,
                project3Image5,
                project3Image6,
            ]
        },

    ];
    return (
        <div className="ProjectDetailsMainBody">
            {projects.map((project, index) => (
                <div key={index} className="displayworks" ref={(el) => (projectRefs.current[index] = el)}
                    style={{ opacity: 0, transition: "opacity 1s ease-out, transform 1s ease-out" }}>
                    <div className="works-card works-left-side">
                        <div className="work-detail work-number">
                            <div className="number">{project.id}</div>
                        </div>
                        <div className="work-detail work-info">
                            <div className="work-detail-card">
                                <div className="work-same-style work-name">{project.title}</div>
                                <div className="work-same-style work-role">{project.role}</div>
                                <div className="work-same-style work-about">{project.description}</div>
                                <div className="work-link">
                                    <a href={project.link} target="_blank" rel="noreferrer">
                                        <div className="work-link-svg">🔗</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="work-detail work-type">
                            <div className="number">{project.type}</div>
                        </div>
                    </div>
                    <div className="works-card works-right-side">
                     {project.video && (
                            <div className="video-container">
                                <video controls>
                                    <source src={project.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                        {project.images.map((image, imgIndex) => (
                            <div key={imgIndex} className={`image image${imgIndex + 1}`}>
                                <img src={image} alt={`${project.title} screenshot ${imgIndex + 1}`} />
                            </div>
                        ))}
                       
                        
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Projects;