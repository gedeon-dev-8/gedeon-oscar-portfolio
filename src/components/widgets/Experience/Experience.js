import './Experience.scss';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ILANK from '../../../assets/images/I - LANK.png';
import Momentum from '../../../assets/images/Momentum.png';
import ZoneZappTechLtd from '../../../assets/images/ZoneZapp Tech Ltd.png';
import IMXVitualRange from '../../../assets/images/Imagistix Technologies.png';

const experiences = [
  {
    role: 'Full Stack Web Developer',
    company: 'Imagistix Technologies',
    date: 'March 2021 – Present',
    points: [
      'Developed HubscoreX, a web app transforming shooting simulation data into actionable insights.',
      'Built a robust architecture for data uploads, performance analytics, and AI-powered feedback.',
      'Designed a clean, intuitive interface with dynamic data visualizations for enhanced UX.',
    ],
    image: IMXVitualRange,
    alt: 'Imagistix Technologies',
    colorClass: 'role-fullstack',
  },
  {
    role: 'Web Developer & Designer',
    company: 'ZoneZapp Tech Ltd',
    date: 'May 2025 – Present',
    points: [
      'Created a community-driven, location-based platform for real-time local updates and storytelling.',
      'Designed a responsive, user-centric interface promoting authentic engagement and easy navigation.',
      'Integrated features supporting trust-based interactions within communities.',
    ],
    image: ZoneZappTechLtd,
    alt: 'ZoneZapp Tech Ltd',
    colorClass: 'role-webdev',
  },
  {
    role: 'UI/UX Designer',
    company: 'I-LANK',
    date: 'September 2025 – December 2025',
    points: [
      'Designed a route-based travel app that suggests shortest-distance journeys.',
      'Integrated local transport databases to show nearby taxi ranks and routes.',
      'Focused on user flow optimization and seamless navigation.',
    ],
    image: ILANK,
    alt: 'I-LANK',
    colorClass: 'role-uiux',
  },
  {
    role: 'Frontend Web Developer',
    company: 'Freelancing',
    date: 'March 2024 – January 2025',
    points: [
      'Built UI for Momentum GAP project using AngularJS following precise UI/UX guidelines.',
      'Ensured design consistency and clarity through pixel-perfect component development.',
      'Enhanced usability and accessibility aligned with project goals.',
    ],
    image: Momentum,
    alt: 'Momentum',
    colorClass: 'role-frontend',
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.1 });
  
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
  
  // Cards container animation
  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  // Individual card animation with alternating direction
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -60 : 60,
      y: 20
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  // Content stagger for card internals
  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const contentItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  // List item animation
  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };
  
  // Logo animation
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <motion.section 
      id="experience" 
      className="experience-section container py-5 text-center"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="text-center mt-5">
        <motion.span 
          className="badge rounded-pill text-bg-light px-3 py-2 mb-2"
          variants={badgeVariants}
        >
          Experience
        </motion.span>
        
        <motion.h2 
          className="fw-bold mb-2"
          variants={tagVariants}
        >
          {"<section>"}
        </motion.h2>
        
        <motion.p 
          className="text-muted"
          variants={subtitleVariants}
        >
          Here's a quick summary of my most recent experiences:
        </motion.p>
      </div>
      
      <motion.div 
        className="row g-4 text-start py-5"
        ref={cardsRef}
        variants={cardsContainerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
      >
        {experiences.map((exp, index) => (
          <motion.div 
            className="col-md-6" 
            key={index}
            variants={cardVariants}
            custom={index}
          >
            <motion.div 
              className="experience-card border rounded shadow-sm d-flex flex-md-row align-items-center"
              whileHover={{ 
                y: -8,
                boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="experience-content p-4 flex-fill"
                variants={cardContentVariants}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
              >
                <motion.strong 
                  className={`d-inline-block mb-2 ${exp.colorClass}`}
                  variants={contentItemVariants}
                >
                  {exp.role}
                </motion.strong>
                
                <motion.h3 
                  className="mb-1 fw-semibold"
                  variants={contentItemVariants}
                >
                  {exp.company}
                </motion.h3>
                
                <motion.div 
                  className="text-muted small mb-3"
                  variants={contentItemVariants}
                >
                  {exp.date}
                </motion.div>
                
                <ul className="mb-0">
                  {exp.points.map((point, i) => (
                    <motion.li 
                      key={i} 
                      className="mb-2"
                      variants={listItemVariants}
                      custom={i}
                      initial="hidden"
                      animate={cardsInView ? "visible" : "hidden"}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="experience-logo d-none d-lg-flex justify-content-center align-items-center"
                variants={logoVariants}
                initial="hidden"
                animate={cardsInView ? "visible" : "hidden"}
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  scale: 1.1,
                  transition: { duration: 0.5 }
                }}
              >
                <img src={exp.image} alt={exp.alt} className="p-3 rounded-circle" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;