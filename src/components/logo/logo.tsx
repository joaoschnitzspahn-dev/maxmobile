import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants";

interface LogoProps {
  className?: string;
  priority?: boolean;
  href?: string;
}

export function Logo({ className, priority = false, href = "/" }: LogoProps) {
  const image = (
    // Native img avoids Next/Image WebP conversion that breaks transparency on mobile Safari
    <img
      src="/logo.png"
      alt={SITE.name}
      width={200}
      height={72}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn(
        "block h-10 w-auto max-w-none bg-transparent object-contain object-left",
        "mix-blend-screen lg:mix-blend-normal",
        className
      )}
    />
  );

  if (!href) return image;

  return (
    <Link
      href={href}
      className="relative flex shrink-0 items-center bg-transparent"
      aria-label={`${SITE.name} — Página inicial`}
    >
      {image}
    </Link>
  );
}
