import './About.scss';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import DeveloperImage from '../../../assets/images/Creator-Blob.png';

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  // Track when sections come into view
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const textInView = useInView(textRef, { once: true, amount: 0.2 });
  
  // Scroll-based parallax for image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const smoothImageY = useSpring(imageY, { stiffness: 100, damping: 30 });
  const smoothRotate = useSpring(imageRotate, { stiffness: 100, damping: 30 });
  
  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
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
  
  // Image animation
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: -60
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  // Text section animations
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const textItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="about-section py-5 d-flex flex-column align-items-center"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Header Section */}
      <div className="text-center mt-5">
        <motion.span 
          className="badge rounded-pill text-bg-light px-3 py-2 mb-2"
          variants={badgeVariants}
        >
          About me
        </motion.span>
        
        <motion.h2 
          className="fw-bold mb-2"
          variants={tagVariants}
        >
          {"<article>"}
        </motion.h2>
        
        <motion.p 
          className="text-muted"
          variants={subtitleVariants}
        >
          Creative and critical thinker, an excellent team player
        </motion.p>
      </div>

      <div className="container row featurette align-items-center py-5">
        {/* Image Section */}
        <motion.div 
          className="col-md-5 order-md-1 text-center mb-4 mb-md-0"
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <motion.img
            src={DeveloperImage}
            className="about-image img-fluid rounded-3 shadow-sm"
            width="500"
            height="500"
            alt="Portrait of Gedeon Oscar, Frontend Engineer and UI/UX Designer"
            loading="lazy"
            style={{ 
              y: smoothImageY,
              rotate: smoothRotate
            }}
            whileHover={{ 
              scale: 1.05,
              rotate: 0,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="col-md-7 order-md-2 about-text-section"
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textContainerVariants}
        >
          <motion.h2 
            className="display-5 fw-bold mb-4 text-gradient"
            variants={textItemVariants}
          >
            Curious about me? <span className="text-muted">Here you have it:</span>
          </motion.h2>
          
          <motion.p 
            className="lead mb-4"
            variants={paragraphVariants}
          >
            I'm <strong>Gedeon Oscar</strong> — a <strong>Junior Creative Frontend Engineer</strong> and
            <strong> UI/UX Designer</strong> driven by curiosity, creativity, and a deep passion for building digital experiences
            that <em>feel</em>, <em>look</em>, and <em>work</em> beautifully. I believe great design bridges the gap between logic and emotion,
            and I love crafting solutions that bring both together.
          </motion.p>
          
          <motion.p 
            className="lead mb-4"
            variants={paragraphVariants}
          >
            My toolkit spans across <strong>HTML, CSS, JavaScript, and modern frameworks</strong>,
            allowing me to build responsive, high-performance interfaces. I thrive on learning,
            staying current with evolving technologies, and pushing my creative boundaries every day.
          </motion.p>
          
          <motion.p 
            className="lead"
            variants={paragraphVariants}
          >
            I'm also bilingual in <strong>French</strong> and <strong>English</strong>, which helps me collaborate effectively
            within diverse teams and connect with users from different cultures and perspectives.
            To me, each project is more than just code — it's a story I help bring to life.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;