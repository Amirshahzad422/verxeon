"use client";

import { useState } from "react";

const tabsData = [
    {
        id: "Design",
        label: "Design",
        img: "/images/page4-1.webp",
        desc: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    },
    {
        id: "Project",
        label: "Project",
        img: "/images/page4-2.webp",
        desc: "Once a design is complete, our production team takes over to bring the vision to life. We manage vendors, fabricate custom elements, and ensure every detail meets our rigorous quality standards."
    },
    {
        id: "Execution",
        label: "Execution",
        img: "/images/page4-3.webp",
        desc: "We manage the entire installation and execution process on-site. From logistics and scheduling to final styling, we ensure the project is delivered flawlessly and on time."
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
            <img id="page4-img" src={activeTab.img} alt={activeTab.label} />
        </div>
    );
}
