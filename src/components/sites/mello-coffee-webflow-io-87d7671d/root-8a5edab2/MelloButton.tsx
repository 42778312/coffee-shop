import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "ghostOnDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#AAD0C8] text-[#1F3D38] hover:bg-[#8fc4ba]",
  ghost:
    "bg-transparent text-[#1F3D38] ring-1 ring-inset ring-[#1F3D38] hover:bg-[#AAD0C8]/40",
  ghostOnDark:
    "bg-transparent text-[#FFFFFF] ring-1 ring-inset ring-[#AAD0C8] hover:bg-[#AAD0C8] hover:text-[#1F3D38]",
};

export function MelloButton({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
      className={cn(
        "inline-flex h-[66px] items-center justify-center rounded-[20px] px-7 text-[18px] font-medium leading-none transition",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
