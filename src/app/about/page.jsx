import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CircleCursorInit from "@/components/CircleCursorInit";
import "./page.css";

export const metadata = {
    title: "About — VerXeon Technologies",
    description: "Learn about Verxeon, the technology partner for the world's most ambitious businesses.",
};

export default function AboutPage() {
    return (
        <>
            <div id="main">
                <div id="page1">
                    <Nav />
                    <section id="about-hero">
                        <div id="about-pill">About Company</div>
                        <h1 id="about-headline">
                            The future of business is<br/>being shaped by Verxeon
                        </h1>
                        <p id="about-subheadline">
                            Discover how Verxeon is revolutionizing the industry with innovative<br/>solutions and a commitment to excellence.
                        </p>
                        <div id="about-video-container">
                            <video 
                                src="/videos/about.mp4" 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            ></video>
                        </div>
                        <div id="about-gooey"></div>
                    </section>
                    <div id="page2-bottom">
                        <h1>
                            Verxeon delivers intelligent software built to perform at the highest level.
                        </h1>
                        <div id="bottom-part2">
                            <img
                                src="/images/page2.jpg"
                                alt=""
                            />
                            <p>
                                We don't just build software. We architect the competitive advantage that keeps our clients ahead through AI, automation,
                                and technology that actually works at scale.
                            </p>
                        </div>
                    </div>
                    <div id="gooey"></div>
                    <div id="page2-bottom-right">
                        <h1>
                            Verxeon delivers intelligent software built to perform at the highest level.
                        </h1>
                        <div id="bottom-part2-left">
                            <img
                                src="/images/page2.jpg"
                                alt=""
                            />
                            <p>
                                We don't just build software. We architect the competitive advantage that keeps our clients ahead through AI, automation,
                                and technology that actually works at scale.
                            </p>
                        </div>
                    </div>
                    <section id="about-mission">
                        {/* Left Column */}
                        <div id="mission-left">
                            <img
                                src="/images/services/design.webp"
                                alt="Team portrait"
                                id="mission-portrait"
                            />
                            <h3 id="mission-heading">Mission</h3>
                            <p id="mission-text">
                                Our mission is to help businesses grow through intelligent design, reliable technology,
                                and AI-driven solutions. We build digital products that are simple, scalable, and tailored
                                to real user needs. Every project is guided by clarity, collaboration, and a commitment
                                to deliver meaningful results.
                            </p>
                        </div>
                        {/* Right Column */}
                        <div id="mission-right">
                            <h2 id="mission-headline">
                                We help to create strategies, design &amp; development.
                            </h2>
                            <img
                                src="/images/services/design.webp"
                                alt="Workspace"
                                id="mission-workspace"
                            />
                            <h3 id="value-heading">Value</h3>
                            <p id="value-text">
                                We operate with trust, commitment, and flexibility at the core of everything we do.
                                We communicate openly, stay fully dedicated to our clients' success, and adapt quickly
                                as their needs evolve. By combining strong ethics with deep technical expertise, we create
                                digital experiences that inspire confidence and drive long-term impact.
                            </p>
                            <div id="mission-cta">
                                <a href="mailto:contact@verxeon.com" id="cta-talk-btn">Let&apos;s Talk Growth</a>
                                <a href="mailto:contact@verxeon.com" id="cta-arrow-btn" aria-label="Contact us">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </section>
                    <section className="contact-cta">
                        <div className="contact-cta__cursor-circle" id="cta-cursor-circle">
                            <span className="contact-cta__circle-arrow">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <span className="contact-cta__circle-label">LET'S TALK</span>
                        </div>
                        <div className="contact-cta__inner">
                            <div className="contact-cta__headline">
                                <h2>Have a project in mind? Contact us!</h2>
                            </div>
                            {/* <!-- Column 2: Circle CTA (cursor-tracked) --> */}
                             <div className="contact-cta__circle-wrap" id="cta-hover-zone"></div>
                            <div className="contact-cta__info">
                                <div className="contact-cta__info-group">
                                    <p className="contact-cta__info-label">LET'S CONNECT:</p>
                                    <Link href="/services" className="contact-cta__deck-btn">CHECK OUR Services</Link>
                                </div>
                                <div className="contact-cta__info-group">
                                    <p className="contact-cta__info-label">OUR FOCUS:</p>
                                    <p className="contact-cta__address">AI-Powered Software Development Agency<br/>Helping companies scale through technology</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="space"></div>
                </div>
                <div id="page5"></div>
            </div>
            <CircleCursorInit hoverZoneSelector=".contact-cta" cursorSelector="#cta-cursor-circle" />
            <Footer />
        </>
    );
}