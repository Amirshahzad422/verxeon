"use client";

import { useState } from "react";

const tabsData = [
    {
        id: "Discovery",
        label: "Discovery",
        img: "/images/page4-1.webp",
        desc: "We start with your vision what do you want to build, and how can we accelerate your growth to outpace the competition? We align on goals, map your challenges, and define a clear path forward through research, workshops, and technical feasibility."
    },
    {
        id: "Kickoff",
        label: "Kickoff",
        img: "/images/page4-2.webp",
        desc: "We align on strategy and set clear goals. Our team plans every step timelines, responsibilities, tech stack, and delivery milestones so expectations are crystal clear before a single line of code is written."
    },
    {
        id: "Execute",
        label: "Execute",
        img: "/images/page4-3.webp",
        desc: "We bring your vision to life with precision and speed. From UI/UX design and AI integration to full-stack engineering and cloud deployment every task is handled by experts using the best tools available."
    },
    {
        id: "Deliver",
        label: "Deliver",
        img: "/images/page4-4.webp",
        desc: "We present the final product polished, tested, and ready for impact. Our focus is on quality, performance, and measurable results that drive the business growth you envisioned from day one."
    }
];

export default function TabSection() {
    const [activeTab, setActiveTab] = useState(tabsData[0]);

    return (
        <div id="black-box">
            <div id="tab-sec">
                <div id="tabs">
                    {tabsData.map((tab) => (
                        <h2 
                            key={tab.id}
                            id={tab.id} 
                            onClick={() => setActiveTab(tab)}
                            style={{ color: activeTab.id === tab.id ? 'rgb(239, 234, 227)' : 'rgb(80, 74, 69)' }}
                        >
                            <a style={{ color: "inherit", cursor: "pointer" }}>{tab.label}</a>
                        </h2>
                    ))}
                </div>
                <div id="desc">{activeTab.desc}</div>
            </div>
                <img
                    id="page4-img"
                    src={activeTab.img}
                    alt={activeTab.label}
                />
        </div>
    );
}
