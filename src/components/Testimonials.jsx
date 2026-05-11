"use client";

import { useState } from "react";
import { reviews } from "@/data/reviews";
import "./Testimonials.css";

export default function Testimonials() {
    const [reviewIndex, setReviewIndex] = useState(0);
    const activeReview = reviews[reviewIndex];
    const handlePrev = () => setReviewIndex((i) => (i - 1 + reviews.length) % reviews.length);
    const handleNext = () => setReviewIndex((i) => (i + 1) % reviews.length);

    return (
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
                                {reviews.slice(0, 3).map((r) => (
                                    <div key={r.id} className="cv-avatar">
                                        {r.avatar
                                            ? <img src={r.avatar} alt={r.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                                            : <span>{r.initials}</span>
                                        }
                                    </div>
                                ))}
                                <div className="cv-avatar">
                                    {reviews[3]?.avatar
                                        ? <img src={reviews[3].avatar} alt={reviews[3].name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                                        : <span>{reviews[3]?.initials}</span>
                                    }
                                </div>
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
                            <div className="cv-author-avatar">
                                        {activeReview.avatar
                                            ? <img src={activeReview.avatar} alt={activeReview.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                                            : activeReview.initials
                                        }
                                        </div>
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
    );
}
