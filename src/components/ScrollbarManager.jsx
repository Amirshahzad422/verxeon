"use client";

import { useEffect } from "react";

export default function ScrollbarManager() {
    useEffect(() => {
        let scrollTimeout = null;
        let isScrolling = false;
        const root = document.documentElement;

        const showScrollbar = () => {
            root.classList.add("show-scrollbar");
        };

        const hideScrollbar = () => {
            root.classList.remove("show-scrollbar");
        };

        const onScroll = () => {
            isScrolling = true;
            showScrollbar();

            if (scrollTimeout) {
                window.clearTimeout(scrollTimeout);
            }

            scrollTimeout = window.setTimeout(() => {
                isScrolling = false;
                hideScrollbar();
            }, 1000);
        };

        const onMouseEnter = () => {
            showScrollbar();
        };

        const onMouseLeave = () => {
            if (!isScrolling) {
                hideScrollbar();
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        root.addEventListener("mouseenter", onMouseEnter);
        root.addEventListener("mouseleave", onMouseLeave);

        return () => {
            window.removeEventListener("scroll", onScroll);
            root.removeEventListener("mouseenter", onMouseEnter);
            root.removeEventListener("mouseleave", onMouseLeave);
            if (scrollTimeout) {
                window.clearTimeout(scrollTimeout);
            }
            hideScrollbar();
        };
    }, []);

    return null;
}
