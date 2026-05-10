import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicesPages } from "@/data/servicesData";
import "../page.css";

export default function EngagementPage() {
    return (
        <>
            <div id="main">
                <div id="page1">
                    <Nav />
                    <ServicePageTemplate data={servicesPages.engagement} />
                    <div className="space"></div>
                </div>
                <div id="page5"></div>
            </div>
            <Footer />
        </>
    );
}
