"use client";

import { useEffect, useRef } from "react";

export default function Loader() {
    const loaderRef = useRef(null);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            if (loaderRef.current) {
                loaderRef.current.style.top = "-100%";
            }
        }, 4200);

        return () => {
            window.clearTimeout(timer);
        };
    }, []);

    return (
        <div id="loader" ref={loaderRef}>
            <h1>ENVIRONMENTS</h1>
            <h1>EXPERIENCES</h1>
            <h1>CONTENT</h1>
        </div>
    );
}
