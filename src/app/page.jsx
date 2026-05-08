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
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
    },
    {
        id: "elem2",
        title: "Design",
        desc: "From wireframes to full design systems we craft interfaces that are beautiful, intuitive, and built to convert. UI/UX, branding, and visual identity done right.",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp",
    },
    {
        id: "elem3",
        title: "Engineering",
        desc: "Full-stack engineering across web, mobile, API, cloud, and DevOps. We build reliable, scalable systems that perform under pressure and grow with your business.",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp",
    },
    {
        id: "elem4",
        title: "AI & Data",
        desc: "We build intelligent systems AI agents, machine learning models, MLOps pipelines, and data engineering solutions that make your business smarter and faster.",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1643_Copy%2520of%2520DSC04080-p-1600.webp",
    },
    {
        id: "elem5",
        title: "Emerging Tech",
        desc: "Stay ahead with AR/VR, IoT, Blockchain, and RPA solutions. We help businesses adopt the next wave of technology before their competitors even see it coming.",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1712_AM704009-p-1600.webp",
    },
    {
        id: "elem6",
        title: "Optimization",
        desc: "We audit, test, and improve what you already have software audits, QA, ongoing maintenance, and compliance reviews that keep your systems healthy and risk-free.",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp",
    },
    {
        id: "elem7",
        title: "Growth",
        desc: "We drive measurable business growth through performance marketing, SEO, CRO, and branding strategies that attract the right customers and keep them coming back.",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp",
    },
    {
        id: "elem8",
        title: "Engagement",
        desc: "Flexible hiring models built around you dedicated teams, staff augmentation, or an offshore development center. The right talent, exactly when you need it.",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp",
    },
];

const swiperSlides = [
    {
        id: "slide1",
        logo: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg",
        description: "Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.",
    },
    {
        id: "slide2",
        logo: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg",
        description: "Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.",
    },
    {
        id: "slide3",
        logo: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg",
        description: "Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.",
    },
    {
        id: "slide4",
        logo: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg",
        description: "Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women's, Men's and Kid's zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022.",
    },
    {
        id: "slide5",
        logo: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg",
        description: "Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.",
    },
    {
        id: "slide6",
        logo: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg",
        description: "Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay's clients such as Crocs, JD Sports, Container Store, & Revolve.",
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
                                src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
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
                            <h4><a href="#">VIEW ALL SERVICES -&gt;</a></h4>
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
