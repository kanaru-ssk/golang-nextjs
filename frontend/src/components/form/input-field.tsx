import { ComponentProps } from "react";

type InputFieldProps = ComponentProps<"input">;

export function InputField({ className, ...rest }: InputFieldProps) {
  return (
    <input
      className={`${className || ""} h-10 min-w-56 rounded border-2 border-neutral-400 px-4 py-2`}
      {...rest}
    />
  );
}
