import {
  TextInput as FlowbiteTextInput,
  type TextInputProps,
} from "flowbite-react";

type Props = TextInputProps & {
  hasError?: boolean;
};

export function TextInput({ hasError, color, ...rest }: Props) {
  return <FlowbiteTextInput color={hasError ? "failure" : color} {...rest} />;
}
