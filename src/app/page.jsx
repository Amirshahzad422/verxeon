import ElemContainer from "@/components/ElemContainer";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import SwiperSection from "@/components/SwiperSection";
import TabSection from "@/components/TabSection";

const projectItems = [
    {
        id: "elem1",
        title: "Play New Kidvision",
        client: "NIKE",
        type: "Environment",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b169f_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-03-p-1600.webp",
    },
    {
        id: "elem2",
        title: "SOHO NYC",
        client: "ARC'TERYX",
        type: "Environment",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp",
    },
    {
        id: "elem3",
        title: "Makers Studio HOI",
        client: "NIKE",
        type: "Experiencal",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1733_Nike_HOI_50th_SU22_FL1_5388.webp",
    },
    {
        id: "elem4",
        title: "SOHO 2023",
        client: "CONVERSE",
        type: "Environment",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1643_Copy%2520of%2520DSC04080-p-1600.webp",
    },
    {
        id: "elem5",
        title: "NYFW Popup",
        client: "AFTERPAY",
        type: "Experiencal",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1712_AM704009-p-1600.webp",
    },
    {
        id: "elem6",
        title: "Air Force 1 2021",
        client: "NIKE",
        type: "Environment",
        image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp",
    },
    {
        id: "elem7",
        title: "50th Anniversary",
        client: "NIKE",
        type: "Environment",
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
                                Sundown is a multi-disciplinary studio focused on creating unique, end-to-end
                                experiences and environments.
                            </h3>
                        </div>
                        <div id="right">
                            <h1>
                                SPACES <br />
                                THAT <br />
                                INSPIRE
                            </h1>
                        </div>
                    </div>
                    <div id="hero-shape">
                        <div id="hero-1"></div>
                        <div id="hero-2"></div>
                        <div id="hero-3"></div>
                    </div>
                    <video autoPlay loop muted src="/videos/video.mp4"></video>
                </div>
                <div id="page2">
                    <div id="moving-text">
                        <div className="con">
                            <h1>EXPERIENCES</h1>
                            <div id="gola"></div>
                            <h1>CONTENT</h1>
                            <div id="gola"></div>
                            <h1>ENVIRONMENTS</h1>
                            <div id="gola"></div>
                        </div>
                        <div className="con">
                            <h1>EXPERIENCES</h1>
                            <div id="gola"></div>
                            <h1>CONTENT</h1>
                            <div id="gola"></div>
                            <h1>ENVIRONMENTS</h1>
                            <div id="gola"></div>
                        </div>
                        <div className="con">
                            <h1>EXPERIENCES</h1>
                            <div id="gola"></div>
                            <h1>CONTENT</h1>
                            <div id="gola"></div>
                            <h1>ENVIRONMENTS</h1>
                            <div id="gola"></div>
                        </div>
                    </div>
                    <div id="page2-bottom">
                        <h1>
                            We are a group of design- driven, goal-focused creators, producers, and designers who
                            believe that the details make all the difference.
                        </h1>
                        <div id="bottom-part2">
                            <img
                                src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
                                alt=""
                            />
                            <p>
                                We love to create, we love to solve, we love to collaborate, and we love to turn
                                amazing ideas into reality. We’re here to partner with you through every step of the
                                process and know that relationships are the most important things we build.
                            </p>
                        </div>
                    </div>
                    <div id="gooey"></div>
                </div>
                <div id="page3">
                    <div id="sec">
                        <div id="gol"></div>
                        <p>FEATURED PROJECTS</p>
                    </div>
                    <ElemContainer items={projectItems} />
                    <div id="but">
                        <div id="navbut">
                            <h4><a href="#">All Projects -&gt;</a></h4>
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
