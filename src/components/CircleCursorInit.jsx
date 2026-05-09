"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function CircleCursorInit({ hoverZoneSelector, cursorSelector }) {
    useEffect(() => {
        let elems = document.querySelectorAll(hoverZoneSelector);
        let elemImgs = document.querySelectorAll(cursorSelector);

        const cleanupFns = [];

        elems.forEach((elem, idx) => {
            if (!elemImgs[idx]) return;

            const onMouseEnter = () => {
                gsap.to(elemImgs[idx], { opacity: 1, scale: 1 });
            };

            const onMouseLeave = () => {
                gsap.to(elemImgs[idx], { opacity: 0, scale: 0 });
            };

            const onMouseMove = (dets) => {
                gsap.to(elemImgs[idx], {
                    x: dets.clientX - 80, // 80 = half circle width
                    y: dets.clientY - 80, // 80 = half circle height
                    duration: 0.2,
                    ease: "power2.out"
                });
            };

            elem.addEventListener("mouseenter", onMouseEnter);
            elem.addEventListener("mouseleave", onMouseLeave);
            elem.addEventListener("mousemove", onMouseMove);

            cleanupFns.push(() => {
                elem.removeEventListener("mouseenter", onMouseEnter);
                elem.removeEventListener("mouseleave", onMouseLeave);
                elem.removeEventListener("mousemove", onMouseMove);
            });
        });

        return () => {
            cleanupFns.forEach((fn) => fn());
        };
    }, [hoverZoneSelector, cursorSelector]);

    return null;
}
