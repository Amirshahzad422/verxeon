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
                        <img src="/images/services/strategy.webp" alt="Workspace" id="img-right" />
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
        </>
    );
}
