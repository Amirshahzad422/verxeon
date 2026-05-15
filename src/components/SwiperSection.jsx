"use client";

import { useEffect } from "react";

export default function SwiperSection({ slides }) {
    useEffect(() => {
        let swiper = null;

        const init = async () => {
            const root = document.querySelector(".mySwiper");
            if (!root) return;

            try {
                const { default: Swiper } = await import("swiper");
                swiper = new Swiper(root, {
                    slidesPerView: "auto",
                    centeredSlides: true,
                    spaceBetween: 100,
                });
            } catch (error) {
                console.warn("Swiper failed to initialize:", error);
            }
        };

        init();

        return () => {
            if (swiper && typeof swiper.destroy === "function") {
                swiper.destroy(true, true);
            }
        };
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
