import {
  Checkbox as FlowbiteCheckbox,
  type CheckboxProps,
} from "flowbite-react";

export function Checkbox({ ...rest }: CheckboxProps) {
  return <FlowbiteCheckbox {...rest} />;
}
