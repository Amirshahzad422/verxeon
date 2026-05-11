import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CircleCursorInit from "@/components/CircleCursorInit";
import "./page.css";

export const metadata = {
    title: "About VerXeon Technologies",
    description: "Learn about Verxeon, the technology partner for the world's most ambitious businesses.",
};

const aboutContent = {

    hero: {
        pill: "AI & Software Engineering",

        headline: (
            <>
                Engineering the intelligence
                <br />
                that <em>drives tomorrow</em>
            </>
        ),

        subheadline: (
            <>
                Verxeon Technologies is a next-generation{" "}
                <strong>AI development company</strong> and{" "}
                <strong>custom software agency</strong> building scalable,
                intelligent systems for enterprises that refuse to stand still.
                From AI automation solutions to full-scale digital transformation,
                we engineer the infrastructure of what comes next.
            </>
        ),
    },

    page2Bottom: {
        headline: "Where strategy meets engineering",

        paragraph:
            "We don't build software for the sake of it. Every line of code, every AI model, every automated workflow is engineered to create measurable business impact. Verxeon fuses deep technical expertise with commercial intelligence delivering custom software development that aligns precisely with your growth ambitions. We work where complexity lives, and we thrive there.",
    },

    page2BottomRight: {
        headline: "AI-first. Not AI-added.",

        paragraph:
            "Artificial intelligence isn't a feature we bolt on it's the architecture we build from. From machine learning pipelines to autonomous AI agents and end-to-end AI automation solutions, our systems are designed to learn, adapt, and scale alongside your business. This is digital transformation done with precision and permanence. Not a pilot. Not a proof of concept. Production-ready intelligence, built to last.",
    },

    mission: {
        leftHeading: "Our Mission",

        leftText:
            "We exist to make AI-powered software accessible, reliable, and genuinely transformative for forward-thinking organisations worldwide. Verxeon partners with enterprises and high-growth ventures to architect intelligent systems that don't just solve today's problems they anticipate tomorrow's. We believe that the future belongs to companies that operationalise intelligence at scale, and we are the engineering partner that makes that possible.",

        rightHeadline: "Why Verxeon",

        rightHeading: "Precision engineering for an intelligent era",

        rightText:
            "The gap between a company that adopts AI and one that truly harnesses it is enormous. Verxeon sits at that gap bridging vision with execution. As a leading software development agency and AI engineering firm, we operate at the intersection of enterprise-grade reliability and startup-speed agility. Our cross-functional teams of AI engineers, solution architects, and product strategists work as an extension of your organisation moving fast, thinking long, and building systems that compound in value over time. From initial discovery through to deployment and beyond, Verxeon is the digital transformation company your ambitions demand.",

        ctaBtn: "Start a project with us",
    },
};

export default function AboutPage() {
    return (
        <>
            <div id="main">
                <div id="page1">
                    <Nav />
                    <section id="about-hero">
                        <div id="about-pill">{aboutContent.hero.pill}</div>
                        <h1 id="about-headline">
                            {aboutContent.hero.headline}
                        </h1>
                        <p id="about-subheadline">
                            {aboutContent.hero.subheadline}
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
                            {aboutContent.page2Bottom.headline}
                        </h1>
                        <div id="bottom-part2">
                            <img
                                src="/images/about/about1.webp"
                                alt=""
                            />
                            <p>
                                {aboutContent.page2Bottom.paragraph}
                            </p>
                        </div>
                    </div>
                    <div id="gooey"></div>
                    <div id="page2-bottom-right">
                        <h1>
                            {aboutContent.page2BottomRight.headline}
                        </h1>
                        <div id="bottom-part2-left">
                            <img
                                src="/images/about/about2.webp"
                                alt=""
                            />
                            <p>
                                {aboutContent.page2BottomRight.paragraph}
                            </p>
                        </div>
                    </div>
                    <section id="about-mission">
                        {/* Left Column */}
                        <div id="mission-left">
                            <img
                                src="/images/about/about3.webp"
                                alt="Team portrait"
                                id="mission-portrait"
                            />
                            <h3 id="mission-heading">{aboutContent.mission.leftHeading}</h3>
                            <p id="mission-text">
                                {aboutContent.mission.leftText}
                            </p>
                        </div>
                        {/* Right Column */}
                        <div id="mission-right">
                            <h2 id="mission-headline">
                                {aboutContent.mission.rightHeadline}
                            </h2>
                            <img
                                src="/images/about/about4.webp"
                                alt="Workspace"
                                id="mission-workspace"
                            />
                            <h3 id="value-heading">{aboutContent.mission.rightHeading}</h3>
                            <p id="value-text">
                                {aboutContent.mission.rightText}
                            </p>
                            <div id="mission-cta">
                                <Link href="/contact" id="cta-talk-btn">{aboutContent.mission.ctaBtn}</Link>
                                <Link href="/contact" id="cta-arrow-btn" aria-label="Contact us">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className="contact-cta">
                        <Link href="/contact" className="contact-cta__cursor-circle" id="cta-cursor-circle">
                            <span className="contact-cta__circle-arrow">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <span className="contact-cta__circle-label">LET'S TALK</span>
                        </Link>
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