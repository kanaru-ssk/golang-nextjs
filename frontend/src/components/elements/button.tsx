import type { ComponentPropsWithoutRef } from "react";

export type ButtonProps = ComponentPropsWithoutRef<"button">;

export function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      className={`${className} h-10 min-w-56 rounded bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700 active:bg-blue-800`}
      {...rest}
    />
  );
}
