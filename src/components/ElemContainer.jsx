"use client";

import { useRef } from "react";

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
                    <div
                        key={item.id}
                        className="elem"
                        data-image={item.image}
                        onMouseEnter={() => setImage(item.image)}
                    >
                        <div id="overlay"></div>
                        <div id="proj">
                            <h2>{item.title}</h2>
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
                ))}

                {items.map((item) => (
                    <div key={`mob-${item.id}`} id="mob-elem">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
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
                ))}
            </div>
        </>
    );
}