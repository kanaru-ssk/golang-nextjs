import NextLink, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Props = LinkProps & ComponentPropsWithoutRef<"a">;

export function Link({ className, ...rest }: Props) {
  return <NextLink className={`${className || ""} text-blue-600`} {...rest} />;
}
