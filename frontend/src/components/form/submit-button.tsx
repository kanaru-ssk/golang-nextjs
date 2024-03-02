"use client";

import { useFormStatus } from "react-dom";
import { Button, type ButtonProps, Spinner } from "@/components/elements";

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
