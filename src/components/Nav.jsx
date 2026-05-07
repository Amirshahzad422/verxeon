"use client";

import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <nav>
                <img
                    src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
                    alt=""
                    style={{ opacity: open ? 0 : 1, transition: "opacity ease 0.2s" }}
                />
                <div id="nav-part2">
                    <h4>
                        <a href="#">Work</a>
                    </h4>
                    <h4>
                        <a href="#">Studio</a>
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
