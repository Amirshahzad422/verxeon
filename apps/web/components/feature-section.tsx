import { cn } from "@workspace/ui/lib/utils";
import type React from "react";
import { DecorIcon } from "@workspace/ui/components/decor-icon";
import { FullWidthDivider } from "@workspace/ui/components/full-width-divider";
import { HistoryIcon, SquareDashedIcon, CommandIcon } from "lucide-react";

type FeatureType = {
	title: string;
	icon: React.ReactNode;
	description: string;
};

export function FeatureSection() {
	return (
		<section className="relative">
			<div className="relative mx-auto w-full max-w-[760px]">
				{/* Vertical lines — same as HeroSection */}
				<div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
					<div className="absolute inset-y-0 left-0 w-px bg-border" />
					<div className="absolute inset-y-0 right-0 w-px bg-border" />
					<div className="absolute inset-y-0 left-8 w-px bg-border/30" />
					<div className="absolute inset-y-0 right-8 w-px bg-border/30" />
				</div>

				<FullWidthDivider className="-top-px" />

				{/* Content wrapper */}
				<div className="relative">
					<h2 className="mb-5 text-center font-medium text-2xl md:text-3xl px-4 pt-10">
						Ensuring your speedy workflow
					</h2>

					<div className="relative px-4 pb-4">
						<DashedLine className="top-3 right-3 left-3" />
						<DashedLine className="top-3 bottom-3 right-3" />
						<DashedLine className="top-3 bottom-3 left-3" />
						<DashedLine className="bottom-3 right-3 left-3" />

						<div className="grid grid-cols-1 md:grid-cols-3">
							{features.map((feature) => (
								<div
									className="group [&_svg]:mask-b-from-0% relative p-8 [&_svg]:size-7 [&_svg]:text-muted-foreground"
									key={feature.title}
								>
									{feature.icon}
									<h3 className="font-medium text-lg">{feature.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{feature.description}
									</p>
									<DashedLine className="right-5 bottom-0 left-5 group-last:hidden md:top-5 md:right-0 md:bottom-5 md:left-full" />
								</div>
							))}
						</div>
					</div>
				</div>

				<FullWidthDivider className="-bottom-px" />
			</div>

			{/* DecorIcons at section corners — connect to LogosSection above */}
			<DecorIcon className="size-4 z-10" position="top-left" />
			<DecorIcon className="size-4 z-10" position="top-right" />
			<DecorIcon className="size-4 z-10" position="bottom-left" />
			<DecorIcon className="size-4 z-10" position="bottom-right" />
		</section>
	);
}

function DashedLine({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn("absolute border-collapse border border-dashed", className)}
			{...props}
		/>
	);
}

const features: FeatureType[] = [
	{
		title: "Auto-Save Everything",
		icon: <HistoryIcon />,
		description: "Write without worry, every time.",
	},
	{
		title: "Drag-and-Drop Blocks",
		icon: <SquareDashedIcon />,
		description: "Rearrange sections with the block editor.",
	},
	{
		title: "Keyboard Shortcuts",
		icon: <CommandIcon />,
		description: "Speed up your workflow with quick keys.",
	},
];
