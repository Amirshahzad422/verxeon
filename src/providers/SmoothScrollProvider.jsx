"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({ children }) {
    useEffect(() => {
        let rafId = 0;
        let lenis = null;

        const initLenis = async () => {
            try {
            const Lenis = (await import("@studio-freight/lenis")).default;
            lenis = new Lenis({
                lerp: 0.09,
                smoothWheel: true,
                syncTouch: true,
                wheelMultiplier: 1,
            });

            window.lenis = lenis;

            lenis.on("scroll", (instance) => {
                const scroll = instance.scroll;
                const limit = instance.limit;
                // Emit generic scroll event for other listeners (e.g. CustomScrollbar)
                window.dispatchEvent(new Event("app-scroll"));

                // Use Lenis's real scroll values — window.scrollY stays 0 with Lenis,
                // so the previous window.scroll listener never triggered.
                // Disable pointer-events on #main when page5 (footer spacer) is in view
                // so clicks pass through to the fixed footer beneath (z-index: -1).
                const mainEl = document.getElementById("main");
                if (!mainEl) return;
                const innerHeight = window.innerHeight;
                const atFooter = scroll >= limit - innerHeight;
                mainEl.style.pointerEvents = atFooter ? "none" : "";
            });

            const raf = (time) => {
                lenis.raf(time);
                rafId = window.requestAnimationFrame(raf);
            };

            rafId = window.requestAnimationFrame(raf);
            } catch (error) {
                console.warn("Lenis smooth scroll disabled:", error);
            }
        };

        initLenis();

        return () => {
            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }
            if (lenis && typeof lenis.destroy === "function") {
                lenis.destroy();
            }
            const mainEl = document.getElementById("main");
            if (mainEl) mainEl.style.pointerEvents = "";
        };
    }, []);

    return <>{children}</>;
}
