import './Hero.scss';
import { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import SecondaryImage from '../../../assets/images/Popup-1.jpeg';
import HeroBottomImage from '../../../assets/images/Code-sniplet.png';
import HeroBottomImage2 from '../../../assets/images/hero-bottom-imgae.png';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Scroll-based animations
    const { scrollYProgress } = useScroll();
    
    // Smooth spring physics for animations
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    
    // Transform values based on scroll
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
    
    // Smooth spring animations
    const smoothY = useSpring(y, springConfig);
    const smoothScale = useSpring(scale, springConfig);
    
    // Staggered children animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    
    // Popup animation variants
    const popupVariants = {
        hidden: { 
            opacity: 0,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: [0.34, 1.56, 0.64, 1]
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.3
            }
        }
    };
    
    const popupContentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    
    const slideInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    
    const slideInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <>
            <motion.section 
                id="hero" 
                className="hero-section py-3"
                style={{ opacity, scale: smoothScale, y: smoothY }}
            >
                <motion.div 
                    className="px-4 pt-5 my-5 text-center hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="display-4 fw-bold"
                        variants={itemVariants}
                    >
                        Hi, I'm Gedeon Oscar
                    </motion.h1>
                    
                    <motion.div 
                        className="col-lg-6 mx-auto"
                        variants={itemVariants}
                    >
                        <p className="lead mb-4">
                            A self-taught Junior Creative Frontend Engineer and UI/UX Designer passionate about bringing ideas to life through immersive, intuitive, and purposeful design.
                        </p>
                    </motion.div>
                    
                    <motion.div 
                        className="overflow-hidden" 
                        style={{ maxHeight: '70vh' }}
                        variants={itemVariants}
                    >
                        <div className="container px-5">
                            <motion.img
                                src={HeroBottomImage}
                                className="img-fluid mb-4 hero-preview"
                                alt="Code snippet"
                                loading="lazy"
                                onClick={() => setIsOpen(true)}
                                whileHover={{ 
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.98 }}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* FULLSCREEN POPUP */}
            {isOpen && (
                <motion.div 
                    className="hero-popup"
                    variants={popupVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.button 
                        className="popup-close" 
                        onClick={() => setIsOpen(false)}
                        whileHover={{ 
                            scale: 1.1,
                            rotate: 90,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        ✕
                    </motion.button>
                    
                    <motion.div 
                        className="popup-content"
                        variants={popupContentVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* LEFT SIDE – 40% */}
                        <motion.div 
                            className="popup-left"
                            variants={slideInLeft}
                        >
                            <motion.img 
                                src={SecondaryImage} 
                                alt="Design preview"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            />
                            <motion.div 
                                className="popup-caption"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <h3>Visualize → Design → Code</h3>
                                <p>
                                    Turning visual ideas into functional, scalable
                                    frontend experiences.
                                </p>
                            </motion.div>
                        </motion.div>
                        
                        {/* RIGHT SIDE – 60% */}
                        <motion.div 
                            className="popup-right"
                            variants={slideInRight}
                        >
                            <motion.img 
                                src={HeroBottomImage2} 
                                alt="Code snippet full view"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default Hero;