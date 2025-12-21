import './Contact.scss';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const sectionRef = useRef(null);
  const [copiedItem, setCopiedItem] = useState(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };
  
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
  
  // Contact info container
  const contactContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  // Individual contact item
  const contactItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  // Icon animations
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };
  
  // Copy button animation
  const copyButtonVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.4 }
    },
    tap: { scale: 0.9 }
  };
  
  // Social media section
  const socialTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  const socialContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.7
      }
    }
  };
  
  const socialItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };
  
  // Copied notification
  const copiedNotificationVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.34, 1.56, 0.64, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-5 text-center contact-section"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="text-center mt-5 mb-5">
          <motion.span 
            className="badge rounded-pill text-bg-light px-3 py-2 mb-2"
            variants={badgeVariants}
          >
            Get in touch
          </motion.span>
          
          <motion.h2 
            className="fw-bold mb-2"
            variants={tagVariants}
          >
            {"<footer> & <address>"}
          </motion.h2>
          
          <motion.p 
            className="text-muted"
            variants={subtitleVariants}
          >
            What's next? Feel free to reach out to me if you're looking for<br /> a
            developer, have a query, or simply want to connect.
          </motion.p>
        </div>
        
        <motion.div 
          className="d-flex flex-column align-items-center gap-3 mb-4"
          variants={contactContainerVariants}
        >
          {/* Email */}
          <motion.div 
            className="d-flex align-items-center gap-2"
            variants={contactItemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.i 
              className="fa-solid fa-envelope"
              variants={iconVariants}
            ></motion.i>
            <motion.a
              href="mailto:gedeon.dev8@gmail.com"
              className="fw-semibold text-dark text-decoration-none"
              whileHover={{ 
                color: "#0d6efd",
                transition: { duration: 0.2 }
              }}
            >
              gedeon.dev8@gmail.com
            </motion.a>
            <motion.button
              className="btn btn-link p-0"
              onClick={() => copyToClipboard("gedeon.dev8@gmail.com", "email")}
              variants={copyButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fa-solid fa-clone"></i>
            </motion.button>
            {copiedItem === "email" && (
              <motion.span
                className="badge bg-success ms-2"
                variants={copiedNotificationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                Copied!
              </motion.span>
            )}
          </motion.div>
          
          {/* Phone */}
          <motion.div 
            className="d-flex align-items-center gap-2"
            variants={contactItemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.i 
              className="fa-solid fa-phone"
              variants={iconVariants}
            ></motion.i>
            <motion.a
              href="tel:+27685484758"
              className="fw-semibold text-dark text-decoration-none"
              whileHover={{ 
                color: "#0d6efd",
                transition: { duration: 0.2 }
              }}
            >
              +27 685484758
            </motion.a>
            <motion.button
              className="btn btn-link p-0"
              onClick={() => copyToClipboard("+27685484758", "phone")}
              variants={copyButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fa-solid fa-clone"></i>
            </motion.button>
            {copiedItem === "phone" && (
              <motion.span
                className="badge bg-success ms-2"
                variants={copiedNotificationVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                Copied!
              </motion.span>
            )}
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="text-muted mb-3"
          variants={socialTextVariants}
        >
          You may also find me on these platforms!
        </motion.p>
        
        <motion.div 
          className="d-flex justify-content-center gap-4 fs-4"
          variants={socialContainerVariants}
        >
          <motion.a 
            href="https://github.com/gedeon-dev-8" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-dark"
            variants={socialItemVariants}
            whileHover={{ 
              scale: 1.3,
              rotate: [0, -10, 10, 0],
              color: "#333",
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-brands fa-github"></i>
          </motion.a>
          
          <motion.a 
            href="https://www.figma.com/files/team/1100719634420450397/project/55083278/Team-project?fuid=1100719624455022023" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-dark"
            variants={socialItemVariants}
            whileHover={{ 
              scale: 1.3,
              rotate: [0, -10, 10, 0],
              color: "#F24E1E",
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-brands fa-figma"></i>
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/gedeon-oscar-4a150329a/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-dark"
            variants={socialItemVariants}
            whileHover={{ 
              scale: 1.3,
              rotate: [0, -10, 10, 0],
              color: "#0077B5",
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;