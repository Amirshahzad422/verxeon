"use client";

import { useEffect } from "react";

export default function ScrollbarManager() {
    useEffect(() => {
        let timer = null;

        const addClasses = () => {
            document.body.classList.add("is-scrolling");
            document.documentElement.classList.add("is-scrolling");
        };

        const removeClasses = () => {
            document.body.classList.remove("is-scrolling");
            document.documentElement.classList.remove("is-scrolling");
        };

        const onScroll = () => {
            addClasses();
            if (timer) {
                window.clearTimeout(timer);
            }
            timer = window.setTimeout(() => {
                removeClasses();
            }, 1000);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("wheel", onScroll, { passive: true });
        window.addEventListener("touchmove", onScroll, { passive: true });
        window.addEventListener("keydown", onScroll, { passive: true });
        window.addEventListener("app-scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("wheel", onScroll);
            window.removeEventListener("touchmove", onScroll);
            window.removeEventListener("keydown", onScroll);
            window.removeEventListener("app-scroll", onScroll);
            if (timer) {
                window.clearTimeout(timer);
            }
            removeClasses();
        };
    }, []);

    return null;
}
