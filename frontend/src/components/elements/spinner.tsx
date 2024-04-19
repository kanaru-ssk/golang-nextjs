import { Spinner as FlowbiteSpinner, type SpinnerProps } from "flowbite-react";

export function Spinner({ ...rest }: SpinnerProps) {
  return <FlowbiteSpinner {...rest} />;
}
