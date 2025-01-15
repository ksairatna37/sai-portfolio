
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
import project3video1 from '../Page3Comp/Images/Work3/demo.mp4';
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

import project5Image1 from '../Page3Comp/Images/Work5/img1.png';
import project5Image3 from '../Page3Comp/Images/Work5/img2.png';
import project5Image4 from '../Page3Comp/Images/Work5/img3.png';
import project5Image5 from '../Page3Comp/Images/Work5/img4.png';

import project6Image1 from '../Page3Comp/Images/Work6/img1.png';
import project6Image2 from '../Page3Comp/Images/Work6/img2.png';
import project6Image3 from '../Page3Comp/Images/Work6/img3.png';

import project7Image1 from '../Page3Comp/Images/Work7/img1.png';
import project7Image2 from '../Page3Comp/Images/Work7/img2.png';

import project8Image1 from '../Page3Comp/Images/Work8/img1.png';
import project8Image2 from '../Page3Comp/Images/Work8/img2.png';

import project9Image2 from '../Page3Comp/Images/Work9/img2.png';
import project9Image3 from '../Page3Comp/Images/Work9/img3.png';
import project9Image4 from '../Page3Comp/Images/Work9/img4.png';
import project9Image5 from '../Page3Comp/Images/Work9/img5.png';
import project9video1 from '../Page3Comp/Images/Work9/vid1.mp4';


import certificate from '../Page3Comp/Images/Work1/sai_certificate.jpg';



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
            role: "Full Stack Developer | SDE Intern",
            description: "Real world project, developed using Flutter and React JS, integrating multiple databases and functionalities such as payroll management and HR operations. Managed the entire lifecycle from development to deployment on Firebase",
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
            certificate: certificate
        },
        {
            id: "02",
            title: "PizzaShop Order Management System",
            role: "Frontend Developer",
            description: "Responsive pizza order management system leveraging React JS, Redux for state management, and local storage for data persistence.Included real-time order tracking, stage updates, deletions, downloading receipt and an automated daily reset system to save order details in a .txt file.",
            link: "https://github.com/ksairatna37/pizzashop",
            images: [
                project9Image2,
                project9Image3,
                project9Image4,
                project9Image5,
            ],
            video: [project9video1],
            site:"https://gcdhxg-3000.csb.app/"
        },
        {
            id: "03",
            title: "Weather Insight System",
            role: "Frontend Developer",
            description: "Real-time weather site with responsive design, leveraging React.js for dynamic UI components and OpenWeatherMap API for real-time data retrieval",
            type: "Web App",
            link: "https://github.com/ksairatna37/Vatavaran",
            images: [
                project1Image1,
                project1Image2,
            ],
            video: [project1video1],
            site:"https://ksairatna37.github.io/weather/"
        },
        {
            id: "04",
            title: "MiniBlog",
            role: "Full Stack Developer",
            description: "A responsive blog website using HTML, CSS, Bootstrap, and Django, featuring user authentication, and the ability to create, edit, and delete blog posts. The project includes Django’s admin panel for efficient user and content management",
            type: "Web App",
            link: "https://github.com/ksairatna37/miniblog",
            images: [
                project5Image1,
                project5Image3,
                project5Image4,
                project5Image5,
            ],
        },
        {
            id: "05",
            title: "A Hybrid Stock Prediction Model",
            role: "Project Lead | Developer",
            description: "A hybrid stock prediction model integrating sentiment analysis of financial news with numerical stock market data using Fin-BERT a Transformer model. The system predicts trading signals and improves decision-making by combining market sentiment with technical indicators.",
            type: "ML Model",
            images: [
                project8Image1,
                project8Image2,
            ],
            report: "/report.pdf"

        },
        // {
        //     id: "03",
        //     title: "Zomato Dashboard",
        //     role: "Data Analyst",
        //     description: "Created an interactive Power BI dashboard to analyze restaurant distribution, customer ratings, and service preferences. Provided insights into city-wise counts, popular cuisines, and booking trends for informed decisions.",
        //     type: "PowerBI Dashboard",
        //     link: "https://github.com/ksairatna37/Power-BI-dashboard-for-a-Zomato-Restaurants",
        //     images: [
        //         project7Image2,
        //         project7Image1,
        //     ],
        // },
        
        {
            id: "06",
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
            id: "07",
            title: "Marvel Site Clone",
            role: "Frontend Developer | Team Leader",
            description: "Developed as an End-semester project Marvel-inspired website with a secure login/signup system using a local XAMPP server database",
            type: "Website",
            link: "https://github.com/ksairatna37/Marvel_FanWeb",
            images: [
                project3Image1,
                project3Image3,
                project3Image4,
                project3Image5,
                project3Image6,
            ],
            video: [project3video1]
        },
        {
            id: "08",
            title: "'TantraFiesta - 2023' IIIT'N Technical Fest",
            role: "Graphics Creator | Team Member",
            description: "Created and designed a variety of graphic assets for Tantrafiesta, including banners, social media posts, and promotional materials, contributing to the event's visual identity.",
            type: "Graphic Design",
            link: "https://github.com/ksairatna37/Marvel_FanWeb",
            images: [
                project6Image1,
                project6Image2,
                project6Image3,
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
                                    {
                                        project.link && (
                                            project.id !== "08" ? (
                                                <a href={project.link} target="_blank" rel="noreferrer">
                                                    <div className="work-link-svg">🔗</div>
                                                </a>
                                            ) : (
                                                <a href="graphic_portfolio.pdf" download="graphic_portfolio.pdf">
                                                    <div className="work-link-svg">📄</div>
                                                </a>
                                            )
                                        )
                                    }
                                    {project.certificate && (
                                        <div className="work-link-svg work-certificate">
                                            <a href={project.certificate} target="_blank" rel="noopener noreferrer">
                                                <u>View Certificate</u>
                                            </a>
                                        </div>
                                    )}
                                    {project.site && (
                                        <div className="work-link-svg work-certificate">
                                            <a href={project.site} target="_blank" rel="noopener noreferrer" style={{color:"#0000FF"}}>
                                                <u>Website Link</u>
                                            </a>
                                        </div>
                                    )}
                                    {project.report && (
                                        <div className="work-link-svg work-certificate">
                                            <div className="cv"><a href="report.pdf" download="A Hybrid Stock Prediction Model.pdf">
                                                <u>Download Report</u>
                                            </a></div>
                                        </div>
                                    )}
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
                                <video controls muted>
                                    <source src={project.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                        {
                            project.images && (
                                project.images.map((image, imgIndex) => (
                                    <div key={imgIndex} className={`image image${imgIndex + 1}`}>
                                        <img src={image} alt={`${project.title} screenshot ${imgIndex + 1}`} />
                                    </div>
                                ))
                            )
                        }


                    </div>
                </div>
            ))}
        </div>
    );
}
export default Projects;