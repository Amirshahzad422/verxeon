"use client";

import { useEffect } from "react";

export default function SwiperSection({ slides }) {
    useEffect(() => {
        const init = async () => {
            const { default: Swiper } = await import("swiper");
            new Swiper(".mySwiper", {
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 100,
            });
        };

        init();
    }, []);

    return (
        <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                {slides.map((slide) => (
                    <div key={slide.id} className="swiper-slide">
                        <img src={slide.logo} alt="" />
                        <p>{slide.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
