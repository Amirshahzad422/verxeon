"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomScrollbar() {
    const [scrollPercent, setScrollPercent] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const scrollTimeoutRef = useRef(null);
    const tickingRef = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(true);

            if (scrollTimeoutRef.current) {
                window.clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = window.setTimeout(() => {
                setIsVisible(false);
            }, 1500);

            if (!tickingRef.current) {
                tickingRef.current = true;
                window.requestAnimationFrame(() => {
                    const winScroll = window.scrollY;
                    const height = document.documentElement.scrollHeight - window.innerHeight;
                    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
                    setScrollPercent(scrolled);
                    tickingRef.current = false;
                });
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current) {
                window.clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return (
        <>
            <div
                className={`scroll-indicator${isVisible ? " visible" : ""}`}
                style={{ height: `${scrollPercent}%` }}
            />
            <div className="scroll-progress" style={{ width: `${scrollPercent}%` }} />
        </>
    );
}
