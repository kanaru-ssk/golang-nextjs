"use client";

import { useFormState } from "react-dom";
import { FieldWrapper, InputField, SubmitButton } from "@/components/form";
import { addUserAction } from "./add-user-action";

export function AddUserForm() {
  const [state, dispatch] = useFormState(addUserAction, {});

  return (
    <form action={dispatch} className="space-y-4">
      <FieldWrapper label="name" errors={state.errors?.name}>
        <InputField name="name" type="text" required />
      </FieldWrapper>
      <SubmitButton>add</SubmitButton>
    </form>
  );
}
