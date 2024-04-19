"use client";

import { Button, Spinner, type ButtonProps } from "@/components/elements";

type Props = Omit<ButtonProps, "type"> & { pending: boolean };

export function SubmitButton({ pending, children, ...rest }: Props) {
  return (
    <Button type="submit" disabled={pending} {...rest}>
      {pending ? <Spinner size="sm" /> : children}
    </Button>
  );
}
