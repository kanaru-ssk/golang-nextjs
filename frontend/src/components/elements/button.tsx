import { Button as FlowiteButton, type ButtonProps } from "flowbite-react";

export type { ButtonProps };

export function Button({ ...rest }: ButtonProps) {
  return <FlowiteButton {...rest} />;
}
