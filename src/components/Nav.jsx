"use client";

import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const smoothScrollTo = (href, e) => {
        if (!href || href === "#") return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;
        if (window.lenis) {
            window.lenis.scrollTo(target, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        } else {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <nav>
                <img
                    src="/verxeon-logo.png"
                    alt=""
                    style={{ opacity: open ? 0 : 1, transition: "opacity ease 0.2s" }}
                />
                <div id="nav-part2">
                    <h4>
                        <a href="#page3" onClick={(e) => smoothScrollTo("#page3", e)}>Services</a>
                    </h4>
                    <h4>
                        <a href="#">About</a>
                    </h4>
                    <h4>
                        <a href="#">Contact</a>
                    </h4>
                </div>
                <h3 onClick={toggle}>Menu</h3>
            </nav>
            <div id="full-scr" style={{ top: open ? "0" : "-100%" }}>
                <div id="full-div1"></div>
            </div>
        </>
    );
}
