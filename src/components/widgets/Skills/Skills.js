import "./Skills.scss";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
  
  const skills = [
    { name: "Angular", icon: "fa-angular" },
    { name: "React", icon: "fa-react" },
    { name: "Dart", icon: "fa-dart-lang" },
    { name: "Git", icon: "fa-git-alt" },
    { name: "Javascript", icon: "fa-js" },
    { name: "Figma", icon: "fa-figma" },
    { name: "Sass/Scss", icon: "fa-sass" },
    { name: "CSS3", icon: "fa-css3-alt" },
    { name: "HTML5", icon: "fa-html5" },
    { name: "Bootstrap", icon: "fa-bootstrap" },
    { name: "Flutter", icon: "fa-flutter" },
    { name: "PHP", icon: "fa-php" },
  ];
  
  // Header animations (matching About component)
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
  
  // Grid container animation
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  // Individual skill item animation
  const skillItemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  // Icon hover animation
  const iconHoverVariants = {
    hover: {
      scale: 1.15,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="skills-section text-center py-5"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="text-center mt-5">
          <motion.span 
            className="badge rounded-pill text-bg-light px-3 py-2 mb-2"
            variants={badgeVariants}
          >
            Skills
          </motion.span>
          
          <motion.h2 
            className="fw-bold mb-2"
            variants={tagVariants}
          >
            {"<aside>"}
          </motion.h2>
          
          <motion.p 
            className="text-muted"
            variants={subtitleVariants}
          >
            Some of the skills, tools, and technologies I am really good at:
          </motion.p>
        </div>
        
        <motion.div 
          className="row justify-content-center g-4 mt-5 py-5"
          ref={gridRef}
          variants={gridContainerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="col-4 col-sm-3 col-md-2 skill-item"
              variants={skillItemVariants}
              custom={index}
            >
              <motion.div 
                className="icon-wrapper rounded-3 shadow-sm mb-2"
                variants={iconHoverVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className={`fa-brands ${skill.icon} fa-2x skill-icon`}></i>
              </motion.div>
              <motion.p 
                className="skill-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + (index * 0.08) }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;