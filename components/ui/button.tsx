import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/20 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-600 text-white shadow-[0_14px_30px_-14px_rgba(5,150,105,.8)] hover:bg-emerald-700",
        secondary:
          "bg-blue-600 text-white shadow-[0_14px_30px_-14px_rgba(37,99,235,.7)] hover:bg-blue-700",
        outline:
          "border border-slate-300 bg-white text-slate-800 hover:border-emerald-500 hover:text-emerald-700",
        ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
      size: {
        sm: "min-h-10 px-4 text-sm",
        md: "min-h-11 px-5 text-sm",
        lg: "min-h-12 px-6 text-[0.95rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonStyleProps = VariantProps<typeof buttonVariants>;

export function buttonClasses({
  variant,
  size,
  className,
}: ButtonStyleProps & { className?: string } = {}) {
  return cn(buttonVariants({ variant, size }), className);
}

export function ButtonLink({
  href,
  children,
  variant,
  size,
  className,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonStyleProps["variant"];
  size?: ButtonStyleProps["size"];
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={buttonClasses({ variant, size, className })}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant,
  size,
  className,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleProps & {
    asChild?: boolean;
  }) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={buttonClasses({ variant, size, className })}
      {...props}
    >
      {children}
    </Component>
  );
}
