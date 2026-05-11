"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CircleCursorInit from "@/components/CircleCursorInit";
import { reviews } from "@/data/reviews";
import "./page.css";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [reviewIndex, setReviewIndex] = useState(0);
    const activeReview = reviews[reviewIndex];
    const handlePrev = () => setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length);
    const handleNext = () => setReviewIndex((i) => (i + 1) % reviews.length);
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

                    <section className="cv-section">

                        <div className="cv-header">
                            <p className="cv-eyebrow">Client Voices</p>
                            <h2 className="cv-title">
                                What it&apos;s like working<br />
                                <span>with us</span>
                            </h2>
                        </div>

                        <div className="cv-body">

                            {/* LEFT: gradient + inner card */}
                            <div className="cv-left">
                                <div className="cv-inner-card">

                                    <div className="cv-rating-row">
                                        <div>
                                            <div className="cv-rating-num">4.8/5</div>
                                            <div className="cv-rating-label">Average rating from our clients</div>
                                        </div>
                                        <div className="cv-bars">
                                            <div className="cv-bar" style={{ height: "14px" }}></div>
                                            <div className="cv-bar" style={{ height: "22px" }}></div>
                                            <div className="cv-bar" style={{ height: "18px" }}></div>
                                            <div className="cv-bar" style={{ height: "28px" }}></div>
                                            <div className="cv-bar" style={{ height: "22px" }}></div>
                                            <div className="cv-bar" style={{ height: "32px" }}></div>
                                            <div className="cv-bar" style={{ height: "26px" }}></div>
                                            <div className="cv-bar" style={{ height: "36px" }}></div>
                                            <div className="cv-bar" style={{ height: "30px" }}></div>
                                        </div>
                                    </div>

                                    <div className="cv-divider"></div>

                                    <div className="cv-avatars-row">
                                        <div className="cv-avatars">
                                            {/* SVG inline avatar placeholders styled like the screenshot */}
                                            <div className="cv-avatar" style={{ background: "#8a6a5a" }}>
                                                <svg viewBox="0 0 38 38" width="38" height="38"><circle cx="19" cy="13" r="7" fill="#c9a898" /><ellipse cx="19" cy="32" rx="13" ry="9" fill="#c9a898" /></svg>
                                            </div>
                                            <div className="cv-avatar" style={{ background: "#5a7a8a" }}>
                                                <svg viewBox="0 0 38 38" width="38" height="38"><circle cx="19" cy="13" r="7" fill="#90b8c8" /><ellipse cx="19" cy="32" rx="13" ry="9" fill="#90b8c8" /></svg>
                                            </div>
                                            <div className="cv-avatar" style={{ background: "#7a5a8a" }}>
                                                <svg viewBox="0 0 38 38" width="38" height="38"><circle cx="19" cy="13" r="7" fill="#b898c8" /><ellipse cx="19" cy="32" rx="13" ry="9" fill="#b898c8" /></svg>
                                            </div>
                                            <div className="cv-avatar cv-avatar-you">You?</div>
                                        </div>
                                        <span className="cv-trusted">Trusted by 30+ teams</span>
                                    </div>

                                    <div className="cv-divider"></div>

                                    <div className="cv-card-footer">
                                        <span className="cv-brand">Verxeon®</span>
                                    </div>

                                </div>
                            </div>

                            {/* RIGHT: testimonial */}
                            <div className="cv-right">
                                <p className="cv-quote">
                                    <span className="cv-quote-mark">&quot;</span>
                                    {activeReview.feedback}
                                </p>

                                <div className="cv-author-row">
                                    <div className="cv-author">
                                        <div className="cv-author-avatar">{activeReview.initials}</div>
                                        <div>
                                            <div className="cv-author-name">{activeReview.name}</div>
                                            <div className="cv-author-title">{activeReview.title}, {activeReview.company}</div>
                                        </div>
                                    </div>

                                    <div className="cv-nav">
                                        <button className="cv-nav-btn" aria-label="Previous" onClick={handlePrev}>
                                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M10 4L6 8l4 4" />
                                            </svg>
                                        </button>
                                        <button className="cv-nav-btn cv-nav-btn--active" aria-label="Next" onClick={handleNext}>
                                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M6 4l4 4-4 4" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
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
                                            <h2 className="contact-form-card__title" style={{ textAlign: "center", marginBottom: "16px", fontSize: "3rem", fontWeight: "300" }}>
                                                Thank You!
                                            </h2>
                                            <p style={{ fontSize: "1.4rem", fontWeight: "200", color: "#3a3939", textAlign: "center", lineHeight: "1.6", maxWidth: "80%" }}>
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
