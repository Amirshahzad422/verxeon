"use client";

import { useState } from "react";
import Link from "next/link";

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
                <Link href="/">
                    <img
                        src="/verxeon-logo.png"
                        alt="Verxeon"
                        style={{ transition: "opacity ease 0.2s", cursor: "pointer" }}
                    />
                </Link>
                <div id="nav-part2">
                    <h4>
                        <Link href="/services">Services</Link>
                    </h4>
                    <h4>
                        <Link href="/about">About</Link>
                    </h4>
                    <h4>
                        <a href="#">Contact</a>
                    </h4>
                </div>
                <h3 onClick={toggle}>Menu</h3>
            </nav>
            <div id="full-scr" style={{ top: open ? "0" : "-100%" }}>
                <div id="full-div1">
                    <h2><Link href="/services" onClick={toggle}>SERVICES</Link></h2>
                    <h2><Link href="/about" onClick={toggle}>ABOUT</Link></h2>
                    <h2><a href="#" onClick={toggle}>CONTACT</a></h2>
                </div>
            </div>
        </>
    );
}
