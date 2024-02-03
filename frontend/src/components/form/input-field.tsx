import { ComponentProps } from "react";

type InputFieldProps = ComponentProps<"input">;

export function InputField({ className, ...rest }: InputFieldProps) {
  return <input className={`${className || ""} border`} {...rest} />;
}
