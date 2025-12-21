import './Header.scss';

const Header = ({ handleNavClick, activeSection }) => {
    const handleDownloadCV = () => {
        // Create a link element
        const link = document.createElement('a');
        
        // Set the path to your CV file (adjust the path based on where your CV is stored)
        // Common locations: /cv.pdf, /assets/cv.pdf, or /public/cv.pdf
        link.href = '/documents/Gedeon Bafinamen Resume.pdf';
        
        // Set the download attribute with the desired filename
        link.download = 'Gedeon Bafinamen Resume.pdf';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="header" className="header-section sticky-header">
            <header className="p-3 mb-3">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">

                            <h1 className="logo me-4">
                                <span className="bracket">{"{"}</span>
                                <span className="name">Gedeon</span>
                                <span className="dot">.</span>
                                <span className="dev">dev</span>
                                <span className="bracket">{"}"}</span>
                            </h1>

                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <a
                                    className={`nav-link px-3 ${activeSection === 'hero' ? 'active' : ''}`}
                                    href="#hero"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('hero');
                                    }}
                                >
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`nav-link px-3 ${activeSection === 'about' ? 'active' : ''}`}
                                    href="#about"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('about');
                                    }}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`nav-link px-3 ${activeSection === 'skills' ? 'active' : ''}`}
                                    href="#skills"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('skills');
                                    }}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`nav-link px-3 ${activeSection === 'experience' ? 'active' : ''}`}
                                    href="#experience"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('experience');
                                    }}
                                >
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`nav-link px-3 ${activeSection === 'projects' ? 'active' : ''}`}
                                    href="#projects"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('projects');
                                    }}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`nav-link px-3 ${activeSection === 'contact' ? 'active' : ''}`}
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('contact');
                                    }}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <div className="dropdown text-end me-5">
                            <button 
                                type="button" 
                                className="btn btn-fill btn-lg px-4"
                                onClick={handleDownloadCV}
                            >
                                Download CV
                            </button>
                        </div>

                    </div>
                </div>
            </header>
        </section>
    );
}

export default Header;