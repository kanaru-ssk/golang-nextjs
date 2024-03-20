"use client";

import { Button, Spinner, type ButtonProps } from "@/components/elements";
import { useFormStatus } from "react-dom";

type Props = Omit<ButtonProps, "type">;

export function SubmitButton({ children, ...rest }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={`${pending ? "text-[0]" : ""}`}
      {...rest}
    >
      {pending ? <Spinner /> : children}
    </Button>
  );
}
