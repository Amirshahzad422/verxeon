export default function Footer() {
    return (
        <div id="footer">
            <div id="shape1"></div>
            <div id="shape2"></div>
            {/* <div id="shape3"></div> */}
            <div id="footerupper">
                <div className="footer-info">
                    <h2>Work</h2>
                    <h2>Studio</h2>
                    <h2>Contact</h2>
                </div>
                <div id="email">
                    <p>Get industry insights and creative inspiration straight to your inbox.</p>
                    <h6>Email Address</h6>
                </div>
            </div>
            <div id="footerlower">
                {/* <h1>Sundown</h1> */}
                <img src="/verxeon.svg" alt="" />
                
                <div className="footer-info">
                    <h5>Copyright © Sundown Studio</h5>
                    <h5>Brooklyn, NY</h5>
                    <h5>Instagram</h5>
                    <h5>LinkedIn</h5>
                </div>
            </div>
        </div>
    );
}
