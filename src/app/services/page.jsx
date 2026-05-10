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
                    <section class="services">
                        <div className="box">
                            <div className="left">
                                {/* <img
                                    src="/images/services/design.webp"
                                    alt="Workspace"
                                    id="img-left"
                                /> */}
                                <h4>Services</h4>
                                <h2>Let’s create your next big project together.</h2>
                            </div>
                            <div className="right">
                                <img
                                    src="/images/services/strategy.webp"
                                    alt="Workspace"
                                    id="img-right"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="how-section">
                        <div className="how-left">
                            <h4>How We Work</h4>
                        </div>
                        <div className="how-right">
                            <h2>We create stunning digital experiences that people will love.</h2>
                            <div className="how-cols">
                                <p>We believe in a client-centric approach that ensures your vision remains at the heart of every project. Our process begins with a thorough consultation, where we delve into your goals, preferences, and expectations to understand your unique needs fully.</p>
                                <p>Once we have a clear understanding of your objectives, our team of skilled professionals gets to work, translating your ideas into actionable plans. We prioritize communication every step of the way, providing regular updates and seeking your feedback to ensure we're aligned with your vision.</p>
                            </div>
                        </div>
                    </section>
                    <section className="career-section">
                        <div className="career-left">
                            <h4>Career</h4>
                            <h2>Want to be part of our team?</h2>
                        </div>
                        <div className="career-right">
                            <div className="career-item">
                                <span className="career-num">01</span>
                                <div className="career-item-content">
                                    <h3>Remote Work</h3>
                                    <p>Enjoy the freedom to work from anywhere, fostering productivity and work-life balance while staying connected with our global team.</p>
                                </div>
                            </div>
                            <div className="career-item">
                                <span className="career-num">02</span>
                                <div className="career-item-content">
                                    <h3>Worldclass Team</h3>
                                    <p>Collaborate with industry experts, creative minds, and supportive colleagues, fostering a culture of learning, growth, and excellence.</p>
                                </div>
                            </div>
                            <div className="career-item">
                                <span className="career-num">03</span>
                                <div className="career-item-content">
                                    <h3>Flexible Working Hours</h3>
                                    <p>Embrace flexibility to manage your schedule, accommodating personal commitments and optimizing productivity for a balanced work-life harmony.</p>
                                </div>
                            </div>
                            <div className="career-item">
                                <span className="career-num">04</span>
                                <div className="career-item-content">
                                    <h3>Gym Membership</h3>
                                    <p>Prioritize your well-being with complimentary gym access, promoting physical fitness and a healthy lifestyle for all team members.</p>
                                </div>
                            </div>
                            <div className="career-item">
                                <span className="career-num">05</span>
                                <div className="career-item-content">
                                    <h3>Free Training & Books</h3>
                                    <p>Expand your knowledge and skills with access to a vast library of training resources and educational materials, empowering continuous growth.</p>
                                </div>
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
                                    <a href="https://www.linkedin.com/company/verxeon/"  className="contact-cta__deck-btn">LinkedIn</a>
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