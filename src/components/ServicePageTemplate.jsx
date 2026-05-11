import Link from "next/link";
import CircleCursorInit from "./CircleCursorInit";

export default function ServicePageTemplate({ data }) {
    const { hero, howWeWork, career } = data;
    return (
        <>
            <section>
                <div className="box">
                    <div className="left">
                        <h4>{hero.tag}</h4>
                        <h2>{hero.heading}</h2>
                    </div>
                    <div className="right">
                        <img src={hero.image} alt={hero.tag} id="img-right" />
                    </div>
                </div>
            </section>
            <section className="how-section">
                <div className="how-left">
                    <h4>{howWeWork.tag}</h4>
                </div>
                <div className="how-right">
                    <h2>{howWeWork.heading}</h2>
                    <div className="how-cols">
                        <p>{howWeWork.col1}</p>
                        <p>{howWeWork.col2}</p>
                    </div>
                </div>
            </section>
            <section className="career-section">
                <div className="career-left">
                    <h4>{career.tag}</h4>
                    <h2>{career.heading}</h2>
                </div>
                <div className="career-right">
                    {career.items.map((item) => (
                        <div className="career-item" key={item.num}>
                            <span className="career-num">{item.num}</span>
                            <div className="career-item-content">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
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
                                    <a href="https://www.linkedin.com/company/verxeon/" className="contact-cta__deck-btn">LinkedIn</a>
                                </div>
                                <div className="contact-cta__info-group">
                                    <p className="contact-cta__info-label">OUR FOCUS:</p>
                                    <p className="contact-cta__address">AI-Powered Software Development Agency<br/>Helping companies scale through technology</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="space"></div>
                    <CircleCursorInit hoverZoneSelector=".contact-cta" cursorSelector="#cta-cursor-circle" />
        </>
    );
}
