import { cn } from "@workspace/ui/lib/utils";
import { DecorIcon } from "@workspace/ui/components/decor-icon";
import { FullWidthDivider } from "@workspace/ui/components/full-width-divider";
import { Button } from "@workspace/ui/components/button";
import { ArrowRightIcon, PhoneCallIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative">
      {/* ✅ NO overflow-hidden — it was clipping the DecorIcons at edges */}
      <div className="relative mx-auto w-full max-w-[760px]">
        
        {/* Vertical lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-border via-border to-border" />
          <div className="absolute inset-y-0 right-0 w-px bg-linear-to-b from-border via-border to-border" />
          <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-border/30 via-border/30 to-border/30" />
          <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-border/30 via-border/30 to-border/30" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center gap-5 px-4 py-12 md:px-4 md:py-24 lg:py-28">
          {/* Faded gradient background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-1 size-full overflow-hidden"
          >
            <div
              className={cn(
                "absolute -inset-x-20 inset-y-0 z-0 rounded-full",
                "bg-[radial-gradient(ellipse_at_center,theme(--color-foreground/.1),transparent,transparent)]",
                "blur-[50px]"
              )}
            />
          </div>

          
          <a
            className={cn(
              "group mx-auto flex w-fit items-center gap-3 rounded-sm border bg-card p-1 shadow",
              "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
            )}
            href="#link"
          >
            <div className="rounded-xs border bg-card px-1.5 py-0.5 shadow-sm">
              <p className="font-mono text-xs">NOW</p>
            </div>
            <span className="text-xs">accepting new client projects</span>
            <span className="block h-5 border-l" />
            <div className="pr-1">
              <ArrowRightIcon className="size-3 -translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5" />
            </div>
          </a>

          <h1
            className={cn(
              "max-w-2xl text-balance text-center text-3xl text-foreground md:text-5xl lg:text-6xl",
              "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out"
            )}
          >
            Building Digital Experiences That Drive Growth
          </h1>

          <p
            className={cn(
              "text-center text-muted-foreground text-sm tracking-wider sm:text-lg",
              "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out"
            )}
          >
            We help brands scale faster through design, <br /> development and
            strategic execution.
          </p>

          <div className="fade-in slide-in-from-bottom-10 flex w-fit animate-in items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out">
            <Button variant="outline">
              <PhoneCallIcon data-icon="inline-start" /> Book a Call
            </Button>
            <Button>
              Get started <ArrowRightIcon data-icon="inline-end" />
            </Button>
          </div>
        </div>

        <FullWidthDivider className="-top-px" />
        <FullWidthDivider className="-bottom-px" />
      </div>
      {/* DecorIcons moved to section level so they're not clipped by the container */}
      <DecorIcon className="size-4 z-10" position="top-left" />
      <DecorIcon className="size-4 z-10" position="top-right" />
      <DecorIcon className="size-4 z-10" position="bottom-left" />
      <DecorIcon className="size-4 z-10" position="bottom-right" />
    </section>
  );
}