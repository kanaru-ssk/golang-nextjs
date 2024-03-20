import type { ComponentPropsWithoutRef } from "react";

export type ButtonProps = ComponentPropsWithoutRef<"button">;

export function Button({ className, ...rest }: ButtonProps) {
  return (
    <button
      className={`${className || ""} min-w-56 rounded-xl bg-blue-600 px-4 py-3 text-center text-white outline-offset-2 hover:bg-blue-500 active:bg-blue-700`}
      {...rest}
    />
  );
}
