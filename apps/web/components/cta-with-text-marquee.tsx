"use client";

import { ReactNode, useEffect, useRef } from "react";
import { DecorIcon } from "@workspace/ui/components/decor-icon";
import { FullWidthDivider } from "@workspace/ui/components/full-width-divider";
import { cn } from "@workspace/ui/lib/utils";

interface VerticalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
  onItemsRef?: (items: HTMLElement[]) => void;
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}: VerticalMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(containerRef.current.querySelectorAll('.marquee-item')) as HTMLElement[];
      onItemsRef(items);
    }
  }, [onItemsRef]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group flex flex-col overflow-hidden",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Content Agencies",
  "Founders & Execs",
  "Social Media Managers",
  "Content Marketers",
  "Growth Teams",
];

export function CTAWithVerticalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-item');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative">
      <div className="relative mx-auto w-full max-w-[760px]">
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-px bg-border" />
          <div className="absolute inset-y-0 right-0 w-px bg-border" />
        </div>

        <FullWidthDivider className="-top-px" />

        <div className="relative px-4 py-10 md:py-16">
          <div className="animate-fade-in-up">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div className="max-w-xl space-y-8">
                <h1 className="text-5xl font-medium leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl animate-fade-in-up [animation-delay:200ms]">
                  Get Started in Minutes
                </h1>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:400ms]">
                  Start getting more distribution and ROI out of your content. Try Assembly for free for 14 days.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms]">
                  <button className="group relative overflow-hidden rounded-md bg-foreground px-6 py-3 font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="relative z-10">START FREE TRIAL</span>
                    <div className="absolute inset-0 translate-x-[-200%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />
                  </button>
                  <button className="group relative overflow-hidden rounded-md border border-border bg-secondary px-6 py-3 font-medium text-secondary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <span className="relative z-10">BOOK A 15 MINUTE DEMO</span>
                    <div className="absolute inset-0 translate-x-[-200%] bg-gradient-to-r from-transparent via-foreground/10 to-transparent transition-transform duration-700 group-hover:translate-x-[200%]" />
                  </button>
                </div>
              </div>

              <div
                ref={marqueeRef}
                className="relative flex h-[600px] items-center justify-center overflow-hidden animate-fade-in-up [animation-delay:400ms] lg:h-[700px]"
              >
                <div className="relative h-full w-full">
                  <VerticalMarquee speed={20} className="h-full">
                    {marqueeItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="marquee-item py-8 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
                      >
                        {item}
                      </div>
                    ))}
                  </VerticalMarquee>

                  <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-64 bg-gradient-to-b from-background via-background/50 to-transparent" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-64 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <FullWidthDivider className="-bottom-px" />
      </div>

      <DecorIcon className="size-4 z-10" position="top-left" />
      <DecorIcon className="size-4 z-10" position="top-right" />
      <DecorIcon className="size-4 z-10" position="bottom-left" />
      <DecorIcon className="size-4 z-10" position="bottom-right" />
    </section>
  );
}
