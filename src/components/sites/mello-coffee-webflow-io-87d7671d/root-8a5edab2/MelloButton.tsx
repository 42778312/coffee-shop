import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "ghostOnDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#78bf30] text-[#284010] hover:brightness-95",
  ghost:
    "bg-transparent text-[#284010] ring-1 ring-inset ring-[#284010] hover:bg-[#284010]/5",
  ghostOnDark:
    "bg-transparent text-[#e9ebdf] ring-1 ring-inset ring-[#e9ebdf] hover:bg-white/10",
};

export function MelloButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={href}
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
