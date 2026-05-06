import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { DecorIcon } from "@workspace/ui/components/decor-icon"
import { FullWidthDivider } from "@workspace/ui/components/full-width-divider"

export function ContentSection() {
    return (
        <section className="relative">
            <div className="relative mx-auto w-full max-w-[760px]">
                <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-y-0 left-0 w-px bg-border" />
                    <div className="absolute inset-y-0 right-0 w-px bg-border" />
                </div>

                <FullWidthDivider className="-top-px" />

                <div className="relative px-4 py-10 md:py-16">
                    <div className="space-y-8 md:space-y-12">
                        <img
                            className="rounded-(--radius) grayscale"
                            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="team image"
                            loading="lazy"
                        />

                        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                            <h2 className="text-4xl font-medium">
                                The Lyra ecosystem brings together our models, products and platforms.
                            </h2>
                            <div className="space-y-6">
                                <p>
                                    Lyra is evolving to be more than just the models. It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate.
                                </p>

                                <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                                    <Link href="#">
                                        <span>Learn More</span>
                                        <ChevronRight className="size-2" />
                                    </Link>
                                </Button>
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
    )
}
