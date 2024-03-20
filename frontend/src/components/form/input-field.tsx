import { ComponentProps } from "react";

type InputFieldProps = ComponentProps<"input"> & {
  hasError: boolean;
};

export function InputField({ className, hasError, ...rest }: InputFieldProps) {
  return (
    <input
      className={`${className || ""} ${hasError ? "border-red-400 bg-red-100" : "border-neutral-400"} min-w-56 rounded-xl border px-4 py-3`}
      {...rest}
    />
  );
}
