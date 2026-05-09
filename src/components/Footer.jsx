"use client";

const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
};

function smoothScrollTo(href, e) {
    if (!href || href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    if (window.lenis) {
        window.lenis.scrollTo(target, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

export default function Footer() {
    return (
        <div id="footer">
            <div id="shape1"></div>
            <div id="shape2"></div>
            {/* <div id="shape3"></div> */}
            <div id="footerupper">
                <div className="footer-info">
                    <h2>
                        <a href="#page3" style={linkStyle} onClick={(e) => smoothScrollTo("#page3", e)}>Services</a>
                    </h2>
                    <h2>
                        <a href="#" style={linkStyle}>About</a>
                    </h2>
                    <h2>
                        <a href="#" style={linkStyle}>Contact</a>
                    </h2>
                </div>
                <div id="email">
                    <p>Let’s build AI systems that scale your business faster.</p>
                    <h6>
                        <a
                            href="mailto:contact@verxeon.com"
                            style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: "6px" }}
                        >
                            contact@verxeon.com
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                style={{ verticalAlign: "middle", flexShrink: 0 }}
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
                    </h6>
                    
                </div>
            </div>
            <div id="footerlower">
                <img src="/verxeon.svg" alt="" />
                
                <div className="footer-info">
                    <h5>Copyright © verXeon technologies</h5>
                    <h5>Dubai, UAE</h5>

                    <a
                        className="social-link"
                        href="https://www.instagram.com/Verxeon.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
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
                        style={linkStyle}
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