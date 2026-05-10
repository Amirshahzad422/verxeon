"use client";

import { useRef } from "react";
import Link from "next/link";

export default function ElemContainer({ items }) {
    const fixedRef = useRef(null);

    const showFixed = () => {
        if (fixedRef.current) {
            fixedRef.current.style.display = "block";
        }
    };

    const hideFixed = () => {
        if (fixedRef.current) {
            fixedRef.current.style.display = "none";
        }
    };

    const setImage = (image) => {
        if (fixedRef.current) {
            fixedRef.current.style.backgroundImage = `url(${image})`;
        }
    };

    return (
        <>
            <div id="fixed-image" ref={fixedRef}></div>
            <div id="elem-con" onMouseEnter={showFixed} onMouseLeave={hideFixed}>
                {items.map((item) => (
                    <Link href={item.link || "#"} key={item.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div
                            className="elem"
                            data-image={item.image}
                            onMouseEnter={() => setImage(item.image)}
                        >
                            <div id="overlay"></div>
                            <div id="proj">
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    gap: "0px",
                                }}>
                                    <h2 style={{ margin: 0 }}>{item.title}</h2>
                                    <p
                                        className="desc"
                                        style={{
                                            maxHeight: 0,
                                            overflow: "hidden",
                                            opacity: 0,
                                            fontSize: "12px",
                                            fontWeight: "300",
                                            color: "white",
                                            maxWidth: "520px",
                                            lineHeight: "1.6",
                                            margin: 0,
                                            transition: "max-height 0.4s ease, opacity 0.35s ease, margin 0.3s ease",
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}

                {items.map((item) => (
                    <Link href={item.link || "#"} key={`mob-${item.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                        <div id="mob-elem">
                            <img src={item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p style={{ fontSize: "13px", fontWeight: "300", color: "#555", marginTop: "4px" }}>
                                {item.desc}
                            </p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}