import Link from "next/link";
import ElemContainer from "@/components/ElemContainer";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import SwiperSection from "@/components/SwiperSection";
import TabSection from "@/components/TabSection";

const projectItems = [
    {
        id: "elem1",
        title: "Strategy",
        desc: "We help businesses define direction through advisory, discovery workshops, and market research that turn ambition into a clear, executable roadmap.",
        image: "/images/services/strategy.webp",
        link: "/services/strategy",
    },
    {
        id: "elem3",
        title: "Engineering",
        desc: "Full-stack engineering across web, mobile, API, cloud, and DevOps. We build reliable, scalable systems that perform under pressure and grow with your business.",
        image: "/images/services/engineering.webp",
        link: "/services/development",
    },
    {
        id: "elem4",
        title: "AI & Data",
        desc: "We build intelligent systems AI agents, machine learning models, MLOps pipelines, and data engineering solutions that make your business smarter and faster.",
        image: "/images/services/ai.webp",
        link: "/services/ai",
    },
    {
        id: "elem7",
        title: "Growth",
        desc: "We drive measurable business growth through performance marketing, SEO, CRO, and branding strategies that attract the right customers and keep them coming back.",
        image: "/images/services/growth.webp",
        link: "/services/growth",
    },
];

const swiperSlides = [
    {
        id: "slide1",
        logo: "https://upinsurances.com/wp-content/webp-express/webp-images/uploads/2025/02/LOGO-2-1-1.png.webp",
        description: "Delivered a full-scale AI automation platform reducing manual operations by 70%. Verxeon handled product strategy, UI/UX design, backend engineering, and deployment accelerating the client’s market launch timeline significantly.",
    },
    {       
        id: "slide2",
        logo: "https://lonestarcares.org/wp-content/themes/LSCCTX/images/header-logo.svg",
        description: "Built a HIPAA-compliant AI support platform automating appointments, follow-ups, and insurance workflows. Verxeon managed architecture, AI integration, and deployment dramatically improving response speed and operational efficiency overall.",
    },
    {
        id: "slide3",
        logo: "https://fencepost.co/wp-content/uploads/2025/03/FP-3.0-Logo.png",
        description: "Created a custom AI chatbot and CRM automation platform streamlining customer support operations. Verxeon managed conversational design, backend integration, and deployment while improving efficiency and reducing repetitive support tasks.",
    },
    {
        id: "slide4",
        logo: "/images/logoEni.svg",
        description: "Led a digital transformation initiative focused on ERP integration and enterprise automation systems. Verxeon delivered workflow optimization, analytics infrastructure, and cloud deployment improving visibility and operational performance.",
    },
    {
        id: "slide5",
        logo: "https://commercial.allianz.com/content/dam/onemarketing/system/allianz-logo.svg",
        description: "Delivered a scalable insurance operations platform supporting customer portals and policy management workflows. Verxeon managed product design, backend engineering, and mobile integration enhancing engagement and digital infrastructure value.",
    },
    {
        id: "slide6",
        logo: "https://uhy-us.com/media/h3gein5b/uhy_logo_full_color_registrationmark.svg",
        description: "Built a machine learning forecasting engine integrated into enterprise supply chain infrastructure. Verxeon handled predictive modeling, analytics integration, and cloud deployment reducing operational costs and improving accuracy globally.",
    },
];
export default function HomePage() {
    return (
        <>
            <Loader />
            <div id="main" data-scroll-container>
                <div id="page1">
                    <Nav />
                    <div id="center">
                        <div id="left">
                            <h3>
                                The world's most ambitious businesses don't wait for the future they build it. Verxeon is the technology partner that makes that possible, through AI and software engineered for what's next
                            </h3>
                        </div>
                        <div id="right">
                            <h1>
                                SOFTWARE <br />
                                THAT <br />
                                THINKS
                            </h1>
                        </div>
                    </div>
                    <div id="hero-shape">
                        <div id="hero-1"></div>
                        <div id="hero-2"></div>
                        <div id="hero-3"></div>
                    </div>
                    <video autoPlay loop muted src="/videos/video2.mp4"></video>
                </div>
                <div id="page2">
                    <div id="moving-text">
                        <div className="con">
                            <h1>FASTER GROWTH</h1>
                            <div id="gola"></div>
                            <h1>SMARTER SYSTEMS</h1>
                            <div id="gola"></div>
                            <h1>SCALABLE PRODUCTS</h1>
                            <div id="gola"></div>
                            <h1>REAL RESULTS</h1>
                            <div id="gola"></div>
                            <h1>COMPETITIVE EDGE</h1>
                        </div>
                        <div className="con">
                            <h1>FASTER GROWTH</h1>
                            <div id="gola"></div>
                            <h1>SMARTER SYSTEMS</h1>
                            <div id="gola"></div>
                            <h1>SCALABLE PRODUCTS</h1>
                            <div id="gola"></div>
                            <h1>REAL RESULTS</h1>
                            <div id="gola"></div>
                            <h1>COMPETITIVE EDGE</h1>
                        </div>
                        <div className="con">
                            <h1>FASTER GROWTH</h1>
                            <div id="gola"></div>
                            <h1>SMARTER SYSTEMS</h1>
                            <div id="gola"></div>
                            <h1>SCALABLE PRODUCTS</h1>
                            <div id="gola"></div>
                            <h1>REAL RESULTS</h1>
                            <div id="gola"></div>
                            <h1>COMPETITIVE EDGE</h1>
                        </div>
                    </div>
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
                </div>
                <div id="page3">
                    <div id="sec">
                        <div id="gol"></div>
                        <p>Our Services</p>
                    </div>
                    <ElemContainer items={projectItems} />
                    <div id="but">
                        <div id="navbut">
                            <h4><Link href="/services">VIEW ALL SERVICES -&gt;</Link></h4>
                        </div>
                    </div>
                </div>
                <div id="page4">
                    <TabSection />
                    <div id="sec2">
                        <div id="gol"></div>
                        <p>WHO WE WORK WITH</p>
                    </div>
                    <SwiperSection slides={swiperSlides} />
                </div>
                <div id="page5"></div>
            </div>
            <Footer />
        </>
    );
}
