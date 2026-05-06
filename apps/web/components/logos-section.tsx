import { DecorIcon } from "@workspace/ui/components/decor-icon";
import { FullWidthDivider } from "@workspace/ui/components/full-width-divider";
import { LogoCloud } from "@/components/logo-cloud"; // @efferd/logo-cloud-2

export function LogosSection() {
	return (
		<section className="relative">
			<div className="relative mx-auto w-full max-w-[760px]">
				{/* Vertical lines — same as HeroSection */}
				<div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
					<div className="absolute inset-y-0 left-0 w-px bg-border" />
					<div className="absolute inset-y-0 right-0 w-px bg-border" />
				</div>

				<FullWidthDivider className="-top-px" />

				<h2 className="py-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
					Trusted by <span className="text-foreground">experts</span>
				</h2>

				{/* Logo grid — has its own top/bottom dividers */}
				<div className="relative *:border-0">
					<FullWidthDivider className="-top-px" />
					<LogoCloud />
					<FullWidthDivider className="-bottom-px" />
				</div>

				<FullWidthDivider className="-bottom-px" />
			</div>

			{/* DecorIcons at section corners — connect to Hero above and Features below */}
			<DecorIcon className="size-4 z-10" position="top-left" />
			<DecorIcon className="size-4 z-10" position="top-right" />
			<DecorIcon className="size-4 z-10" position="bottom-left" />
			<DecorIcon className="size-4 z-10" position="bottom-right" />
		</section>
	);
}
