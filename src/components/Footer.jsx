export default function Footer() {
    return (
        <div id="footer">
            <div id="shape1"></div>
            <div id="shape2"></div>
            {/* <div id="shape3"></div> */}
            <div id="footerupper">
                <div className="footer-info">
                    <h2>Work</h2>
                    <h2>Studio</h2>
                    <h2>Contact</h2>
                </div>
                <div id="email">
                    <p>Get industry insights and creative inspiration straight to your inbox.</p>
                    <h6>Email Address</h6>
                </div>
            </div>
            <div id="footerlower">
                <img src="/verxeon.svg" alt="" />
                
                <div className="footer-info">
                    <h5>Copyright © verXeon technologies</h5>
                    <h5>Brooklyn, NY</h5>

                    <a
                        className="social-link"
                        href="https://www.instagram.com/Verxeon.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h5>Instagram</h5>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>

                    <a
                        className="social-link"
                        href="https://www.linkedin.com/company/verxeon/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h5>LinkedIn</h5>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}