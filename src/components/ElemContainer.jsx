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
                            <div>
                                <h4>{item.client}</h4>
                                <p>{item.type}</p>
                            </div>
                        </div>
                    </div>
                ))}
                
                {items.map((item) => (
                    <div key={`mob-${item.id}`} id="mob-elem">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <div>
                            <h4>{item.client}</h4>
                            <p>{item.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
