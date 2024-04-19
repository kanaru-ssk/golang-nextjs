import NextLink, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Props = LinkProps & ComponentPropsWithoutRef<"a">;

export function Link({ className, ...rest }: Props) {
  return (
    <NextLink
      className={`${className || ""} text-cyan-700 hover:opacity-80`}
      {...rest}
    />
  );
}
