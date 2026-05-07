"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({ children }) {
    useEffect(() => {
        let rafId = 0;
        let lenis = null;

        const initLenis = async () => {
            const Lenis = (await import("@studio-freight/lenis")).default;
            lenis = new Lenis({
                lerp: 0.07,
                smooth: true,
            });

            const emitScroll = () => {
                window.dispatchEvent(new Event("app-scroll"));
            };

            lenis.on("scroll", emitScroll);

            const raf = (time) => {
                lenis.raf(time);
                rafId = window.requestAnimationFrame(raf);
            };

            rafId = window.requestAnimationFrame(raf);
        };

        initLenis();

        return () => {
            if (rafId) {
                window.cancelAnimationFrame(rafId);
            }
            if (lenis && typeof lenis.destroy === "function") {
                lenis.destroy();
            }
        };
    }, []);

    return <>{children}</>;
}
