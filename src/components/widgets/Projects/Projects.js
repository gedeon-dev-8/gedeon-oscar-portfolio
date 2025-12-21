import "./Projects.scss";
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Zonezapp from '../../../assets/images/Zonezapp.png';
import HubscoreX from '../../../assets/images/HubscoreX.png';
import ILANKFigma from '../../../assets/images/I - LANK Figma.png';
import Momentum from '../../../assets/images/Momentum - Project.png';

const projects = [
    {
        title: "HubscoreX",
        description:
            "A web app that transforms shooting simulation data into actionable insights. Users can upload shot data, visualize performance, and receive AI-powered feedback.",
        image: `${HubscoreX}`,
        tags: ["AngularJS", "PHP", "AWS", "Apache", "NgxCharts", "AI Integration"],
        link: "https://www.hubscorex.com/hubscorex",
    },
    {
        title: "ZoneZapp Web Platform",
        description:
            "A community-driven platform for real-time, location-based sharing. Designed to encourage authentic storytelling, seamless navigation, and community trust.",
        image: `${Zonezapp}`,
        tags: ["React", "Bootstrap", "MongoDB", "Responsive Design", "Node.js"],
        link: "https://online.zonezapp.com/",
    },
    {
        title: "GAP (Guarantee Annuity Portfolio)",
        description:
            "Built user-friendly dashboards for Momentum Metropolitan's GAP project using AngularJS, aligned with the provided design system and UX guidelines.",
        image: `${Momentum}`,
        tags: ["AngularJS", "Angular Material UI", "REST API", "UX Compliance"],
        link: "https://www.youtube.com/watch?v=F2iQB8D-xSM",
    },
    {
        title: "I - LANK (Taxi Rank Route Finder)",
        description:
            "A mobile app concept that helps users find travel routes with the shortest distance. Integrated with a local transport database for accurate taxi rank locations.",
        image: `${ILANKFigma}`,
        tags: ["Figma", "UX Research", "Prototyping", "Mobile Design"],
        link: "https://www.figma.com/design/odj9AJBh4RNI0SCtDCV1CB/I---LANK?node-id=0-1&t=6OaitgTgO7SU4S0K-1",
    },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef(null);
    
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
    const cardsInView = useInView(cardsRef, { once: true, amount: 0.05 });
    
    // Header animations (consistent with previous sections)
    const badgeVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1]
            }
        }
    };
    
    const tagVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    
    const subtitleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: 0.4
            }
        }
    };
    
    // Project cards container
    const cardsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };
    
    // Individual project card with alternating direction
    const cardVariants = {
        hidden: (index) => ({
            opacity: 0,
            x: index % 2 === 0 ? -80 : 80,
            rotateY: index % 2 === 0 ? -15 : 15,
        }),
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    
    // Image animation with parallax effect
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.85 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    
    // Content section animations
    const contentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    
    const contentItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    
    // Tag animation
    const tagsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };
    
    const tagItemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: [0.34, 1.56, 0.64, 1]
            }
        }
    };
    
    // Link icon animation
    const linkVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1]
            }
        }
    };

    return (
        <motion.section 
            id="projects" 
            className="container py-5 projects-section"
            ref={sectionRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <div className="text-center mt-5">
                <motion.span 
                    className="badge rounded-pill text-bg-light px-3 py-2 mb-2"
                    variants={badgeVariants}
                >
                    Projects
                </motion.span>
                
                <motion.h2 
                    className="fw-bold mb-2"
                    variants={tagVariants}
                >
                    {"<figure> & <figcaption>"}
                </motion.h2>
                
                <motion.p 
                    className="text-muted"
                    variants={subtitleVariants}
                >
                    A glimpse into some of the projects I've designed and developed.
                </motion.p>
            </div>

            <div className="container py-5">
                <motion.div 
                    className="container py-5"
                    ref={cardsRef}
                    variants={cardsContainerVariants}
                    initial="hidden"
                    animate={cardsInView ? "visible" : "hidden"}
                >
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            index={index}
                            cardVariants={cardVariants}
                            imageVariants={imageVariants}
                            contentVariants={contentVariants}
                            contentItemVariants={contentItemVariants}
                            tagsContainerVariants={tagsContainerVariants}
                            tagItemVariants={tagItemVariants}
                            linkVariants={linkVariants}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

// Separate component for individual project cards
const ProjectCard = ({ 
    project, 
    index, 
    cardVariants, 
    imageVariants, 
    contentVariants, 
    contentItemVariants,
    tagsContainerVariants,
    tagItemVariants,
    linkVariants
}) => {
    const cardRef = useRef(null);
    
    // Parallax effect for images
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });
    
    const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
    
    return (
        <motion.div 
            ref={cardRef}
            className="card mb-5 shadow-sm border-0 rounded-4 overflow-hidden"
            variants={cardVariants}
            custom={index}
            whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 }
            }}
        >
            <div className="row g-0 align-items-center">
                {/* Image Section */}
                <motion.div
                    className={`col-md-6 ${index % 2 === 0 ? "order-md-1" : "order-md-2"} text-center p-3`}
                    variants={imageVariants}
                >
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="img-fluid rounded-3 project-image"
                        style={{ 
                            y: imageY,
                            scale: imageScale
                        }}
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                    />
                </motion.div>

                {/* Content Section */}
                <motion.div
                    className={`col-md-6 ${index % 2 === 0 ? "order-md-2" : "order-md-1"} p-4`}
                    variants={contentVariants}
                >
                    <motion.h5 
                        className="fw-bold mb-3"
                        variants={contentItemVariants}
                    >
                        {project.title}
                    </motion.h5>
                    
                    <motion.p 
                        className="text-muted mb-3"
                        variants={contentItemVariants}
                    >
                        {project.description}
                    </motion.p>

                    <motion.div 
                        className="mb-3 d-flex flex-wrap gap-2"
                        variants={tagsContainerVariants}
                    >
                        {project.tags.map((tag, i) => (
                            <motion.span
                                key={i}
                                className="badge bg-light text-dark border rounded-pill px-3 py-2"
                                style={{ fontSize: "0.8rem" }}
                                variants={tagItemVariants}
                                whileHover={{ 
                                    scale: 1.1,
                                    backgroundColor: "#e9ecef",
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-decoration-none"
                        variants={linkVariants}
                        whileHover={{ 
                            scale: 1.2,
                            rotate: 45,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <i className="fa-solid fa-arrow-up-right-from-square text-muted"></i>
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Projects;