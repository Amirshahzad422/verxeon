import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { DecorIcon } from "@workspace/ui/components/decor-icon";
import { FullWidthDivider } from "@workspace/ui/components/full-width-divider";

export function CallToAction() {
  return (
    <section className="relative">
      <div className="relative mx-auto w-full max-w-[760px]">
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-px bg-border" />
          <div className="absolute inset-y-0 right-0 w-px bg-border" />
        </div>

        <FullWidthDivider className="-top-px" />

        <div className="relative px-4 py-10 md:py-16">
          <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-8">
            <PlusIcon
              className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6"
              strokeWidth={1}
            />
            <PlusIcon
              className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6"
              strokeWidth={1}
            />
            <PlusIcon
              className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6"
              strokeWidth={1}
            />
            <PlusIcon
              className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6"
              strokeWidth={1}
            />

            <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
            <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

            <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

            <div className="space-y-1">
              <h2 className="text-center font-bold text-2xl">
                Let your plans shape the future.
              </h2>
              <p className="text-center text-muted-foreground">
                Start your free trial today. No credit card required.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Button variant="outline">Contact Sales</Button>
              <Button>
                Get Started <ArrowRightIcon className="ml-1 size-4" />
              </Button>
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
