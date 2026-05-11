"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CircleCursorInit from "@/components/CircleCursorInit";
import "./page.css";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    return (
        <>
            <div id="main">
                <div id="page1">
                    <Nav />
                    <section className="contact-section">
                        <div className="contact-section__inner">

                            {/* <!-- LEFT COLUMN --> */}
                            <div className="contact-section__left">

                                {/* <!-- Manager Card --> */}
                                <div className="contact-card manager-card">
                                    <img
                                        className="manager-card__photo"
                                        src="/images/contact/1.webp"
                                        alt="Mike, Client Success Manager"
                                    />
                                    <div className="manager-card__content">
                                        <h3 className="manager-card__title">Hello 👋 I&apos;m Shilok, Client success manager</h3>
                                        <p className="manager-card__desc">
                                            If you&apos;ve got any questions or just want to talk things through, I&apos;m always happy to chat.
                                        </p>
                                        <a href="#" className="manager-card__link">Talk directly to me</a>
                                    </div>
                                </div>

                                {/* <!-- Work Preview Card --> */}
                                <div className="contact-card work-card">
                                    <div className="work-card__text">
                                        <h3 className="work-card__title">Checkout our Services</h3>
                                        <a href="#" className="work-card__link">View all services</a>
                                    </div>
                                    <div className="work-card__preview">
                                        <img src="/images/contact/3.png" alt="Work 1" className="work-preview-img work-preview-img--back" />
                                        <img src="/images/contact/2.webp" alt="Work 2" className="work-preview-img work-preview-img--mid" />
                                        <img src="/images/contact/4.png" alt="Work 3" className="work-preview-img work-preview-img--front" />
                                    </div>
                                </div>

                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="contact-section__right">
                                <div className="contact-form-card">
                                    {isSubmitted ? (
                                        <div style={{ minHeight: "478px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "fadeSlideUp 0.5s ease both" }}>
                                            <h2 className="contact-form-card__title" style={{ textAlign: "center", marginBottom: "16px",fontSize:"3rem", fontWeight:"300" }}>
                                                Thank You!
                                            </h2>
                                            <p style={{ fontSize: "1.4rem", fontWeight:"200", color: "#3a3939", textAlign: "center", lineHeight: "1.6", maxWidth: "80%" }}>
                                                We&apos;ve received your message and will be in touch shortly. Have a great day!
                                            </p>
                                        </div>
                                    ) : (
                                        <>
                                            <h2 className="contact-form-card__title">Contact us</h2>
                                            <div className="contact-form">
                                            <div className="form-field">
                                                <input type="text" className="form-field__input" placeholder="First Name" />
                                                <div className="form-field__line"></div>
                                            </div>
                                            <div className="form-field">
                                                <input type="text" className="form-field__input" placeholder="Last Name" />
                                                <div className="form-field__line"></div>
                                            </div>
                                            <div className="form-field">
                                                <input type="email" className="form-field__input" placeholder="Email" />
                                                <div className="form-field__line"></div>
                                            </div>
                                            <div className="form-field form-field--textarea">
                                                <textarea className="form-field__input form-field__textarea" placeholder="Message"></textarea>
                                                <div className="form-field__line"></div>
                                            </div>

                                            <button type="button" className="submit-btn" onClick={() => setIsSubmitted(true)}>Submit</button>

                                            <p className="form-legal">
                                                By submitting, you agree to our
                                                <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
                                            </p>
                                        </div>
                                        </>
                                    )}
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
