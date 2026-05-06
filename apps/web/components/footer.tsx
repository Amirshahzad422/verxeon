import { Logo } from "@/components/logo";
import { Button } from "@workspace/ui/components/button";
import { DecorIcon } from "@workspace/ui/components/decor-icon";
import { FullWidthDivider } from "@workspace/ui/components/full-width-divider";
import { cn } from "@workspace/ui/lib/utils";
import { Camera, Globe, Link, Mail, MessageCircle, Video } from "lucide-react";

export function Footer() {
	return (
		<footer className="relative">
			<div className="relative mx-auto w-full max-w-[760px]">
				<div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
					<div className="absolute inset-y-0 left-0 w-px bg-border" />
					<div className="absolute inset-y-0 right-0 w-px bg-border" />
				</div>

				<FullWidthDivider className="-top-px" />

				<div
					className={cn(
						"relative px-4 py-10 md:py-16",
						"dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]"
					)}
				>
					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
							<a className="w-max" href="#">
								<Logo className="h-5" />
							</a>
							<p className="max-w-sm text-balance text-muted-foreground text-sm">
								Beautify your app with efferd.
							</p>
							<div className="flex gap-2">
								{socialLinks.map((item, index) => (
									<Button
										asChild
										key={`social-${item.link}-${index}`}
										size="icon-sm"
										variant="outline"
									>
										<a href={item.link} target="_blank">
											{item.icon}
										</a>
									</Button>
								))}
							</div>
						</div>
						<div className="col-span-3 w-full md:col-span-1">
							<span className="text-muted-foreground text-xs">Resources</span>
							<div className="mt-2 flex flex-col gap-2">
								{resources.map(({ href, title }) => (
									<a
										className="w-max text-sm hover:underline"
										href={href}
										key={title}
									>
										{title}
									</a>
								))}
							</div>
						</div>
						<div className="col-span-3 w-full md:col-span-1">
							<span className="text-muted-foreground text-xs">Company</span>
							<div className="mt-2 flex flex-col gap-2">
								{company.map(({ href, title }) => (
									<a
										className="w-max text-sm hover:underline"
										href={href}
										key={title}
									>
										{title}
									</a>
								))}
							</div>
						</div>
					</div>

					<div className="pt-4">
						<p className="text-center font-light text-muted-foreground text-sm">
							&copy; {new Date().getFullYear()} efferd, All rights reserved
						</p>
					</div>
				</div>

				<FullWidthDivider className="-bottom-px" />
			</div>

			<DecorIcon className="size-4 z-10" position="top-left" />
			<DecorIcon className="size-4 z-10" position="top-right" />
			<DecorIcon className="size-4 z-10" position="bottom-left" />
			<DecorIcon className="size-4 z-10" position="bottom-right" />
		</footer>
	);
}

const company = [
	{
		title: "About Us",
		href: "#",
	},
	{
		title: "Careers",
		href: "#",
	},
	{
		title: "Brand assets",
		href: "#",
	},
	{
		title: "Privacy Policy",
		href: "#",
	},
	{
		title: "Terms of Service",
		href: "#",
	},
];

const resources = [
	{
		title: "Blog",
		href: "#",
	},
	{
		title: "Help Center",
		href: "#",
	},
	{
		title: "Contact Support",
		href: "#",
	},
	{
		title: "Community",
		href: "#",
	},
	{
		title: "Security",
		href: "#",
	},
];

const socialLinks = [
	{
		icon: (
			<Globe />
		),
		link: "#",
	},
	{
		icon: (
			<Link />
		),
		link: "#",
	},
	{
		icon: (
			<Camera />
		),
		link: "#",
	},
	{
		icon: (
			<MessageCircle />
		),
		link: "#",
	},
	{
		icon: <XIcon />,
		link: "#",
	},
	{
		icon: (
			<Video />
		),
		link: "#",
	},
];

function XIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="m18.9,1.153h3.682l-8.042,9.189,9.46,12.506h-7.405l-5.804-7.583-6.634,7.583H.469l8.6-9.831L0,1.153h7.593l5.241,6.931,6.065-6.931Zm-1.293,19.494h2.039L6.482,3.239h-2.19l13.314,17.408Z" />
		</svg>
	);
}
