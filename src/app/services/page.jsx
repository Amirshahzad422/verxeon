"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CircleCursorInit from "@/components/CircleCursorInit";
import Testimonials from "@/components/Testimonials";
import "./main.css";
const services = [
  {
    title: "Strategy",
    slug: "strategy",
    tags: ["Market Research", "Product Roadmaps", "Tech Consulting", "KPIs"],
    image: "/images/services/strategy.webp"
  },
  {
    title: "Design",
    slug: "design",
    tags: ["UI/UX Design", "Brand Identity", "Prototyping", "Design Systems"],
    image: "/images/services/design.webp"
  },
  {
    title: "Engineering",
    slug: "development",
    tags: ["Web Apps", "Mobile Apps", "Cloud Architecture", "APIs"],
    image: "/images/services/engineering.webp"
  },
  {
    title: "AI & Data",
    slug: "ai",
    tags: ["Machine Learning", "Data Engineering", "AI Agents", "MLOps"],
    image: "/images/services/ai.webp"
  },
  {
    title: "Emerging Tech",
    slug: "emergingtech",
    tags: ["AR/VR", "IoT Solutions", "Blockchain", "RPA"],
    image: "/images/services/emergingtech.webp"
  },
  {
    title: "Optimization",
    slug: "optimization",
    tags: ["Software Audits", "QA Testing", "Performance", "Security"],
    image: "/images/services/optimization.webp"
  },
  {
    title: "Growth",
    slug: "growth",
    tags: ["Performance Marketing", "SEO", "CRO", "Analytics"],
    image: "/images/services/growth.webp"
  },
  {
    title: "Engagement",
    slug: "engagement",
    tags: ["Dedicated Teams", "Staff Augmentation", "Offshore Centers"],
    image: "/images/services/engagement.webp"
  },
];
export default function ServicePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div id="main">
        <div id="page1">
          <Nav />
          <section className="contact-hero">
            <div className="contact-hero__left">
              <span className="contact-hero__year">VerXeon</span>
            </div>
            <div className="contact-hero__right">
              <h1 className="contact-hero__title">
                We build systems that <br className="desktop-only" />
                <span>scale businesses globally</span>
              </h1>
              <p className="contact-hero__subtitle">
                We design and engineer automation-driven platforms and software infrastructure <br className="desktop-only" />
                that help companies scale faster, operate efficiently, and grow without limits.
              </p>
            </div>
          </section>
          <section className="whatwedo-section">
            {/* <div className="whatwedo-header">
              <h2>What We Deliver</h2>
              <p>We build AI-driven solutions, automation systems, and scalable digital products that transform business operations and accelerate growth.</p>
            </div> */}
            <div className="whatwedo-body">
              <div className="whatwedo-list">
                {services.map((service, i) => (
                  <Link
                    href={`/services/${service.slug}`}
                    key={i}
                    className={`whatwedo-item ${activeIndex === i ? "active" : ""}`}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <div className="whatwedo-item-row">
                      <div>
                        <h3>{service.title}</h3>
                        {activeIndex === i && service.tags && (
                          <div className="whatwedo-tags">
                            {service.tags.map((tag, t) => (
                              t > 0 ? [
                                <span key={`sep-${t}`} className="tag-sep">+</span>,
                                <span key={`tag-${t}`}>{tag}</span>
                              ] : (
                                <span key={`tag-${t}`}>{tag}</span>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="whatwedo-arrow">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
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
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="whatwedo-image">
                {services.map((service, i) => (
                  <img
                    key={i}
                    src={service.image}
                    alt={service.title}
                    className={activeIndex === i ? "visible" : ""}
                  />
                ))}
              </div>
            </div>
            {/* <div id="about-gooey"></div> */}
          </section>
          <section className="service-detail-section">
            <div className="service-detail-top">
              <div className="service-detail-title">
                <h2>Our Core <span>Values</span></h2>
              </div>
              <div className="service-detail-right">
                <ul className="service-detail-list">
                  <li>AI-Driven Innovation</li>
                  <li>Scalable Digital Systems</li>
                  <li>Performance-Focused Engineering</li>
                </ul>
              </div>
            </div>

            <div className="service-detail-mid">
              <div className="service-detail-desc">
                <p>
                  At VerXeon Technologies, we craft intelligent digital solutions that merge strategy, design, and advanced engineering.
                  Our mission is to empower businesses with AI-powered systems, automation, and scalable software that creates real-world impact in the digital era.
                </p>
              </div>
            </div>


            <div className="service-detail-images">
              <div className="service-detail-img large">
                <img src="/images/services/1.webp" alt="AI Growth Systems" />
              </div>
              <div className="service-detail-img">
                <img src="/images/services/2.webp" alt="System Optimization" />
              </div>
              <div className="service-detail-img">
                <img src="/images/services/3.webp" alt="Digital Engagement" />
              </div>
            </div>

            <div className="service-detail-divider"></div>
          </section>
           <Testimonials />
          <section className="contact-cta">
            <Link href="/contact" className="contact-cta__cursor-circle" id="cta-cursor-circle">
              <span className="contact-cta__circle-arrow">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-cta__circle-label">LET'S TALK</span>
            </Link>
            <div className="contact-cta__inner">
              <div className="contact-cta__headline">
                <h2>Have a project in mind? Contact us!</h2>
              </div>
              {/* <!-- Column 2: Circle CTA (cursor-tracked) --> */}
              <div
                className="contact-cta__circle-wrap"
                id="cta-hover-zone"
              ></div>
              <div className="contact-cta__info">
                <div className="contact-cta__info-group">
                  <p className="contact-cta__info-label">LET'S CONNECT:</p>
                  <a
                    href="https://www.linkedin.com/company/verxeon/"
                    className="contact-cta__deck-btn"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="contact-cta__info-group">
                  <p className="contact-cta__info-label">OUR FOCUS:</p>
                  <p className="contact-cta__address">
                    AI-Powered Software Development Agency
                    <br />
                    Helping companies scale through technology
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="space"></div>
        </div>
        <div id="page5"></div>
      </div>
      <CircleCursorInit
        hoverZoneSelector=".contact-cta"
        cursorSelector="#cta-cursor-circle"
      />
      <Footer />
    </>
  );
}
