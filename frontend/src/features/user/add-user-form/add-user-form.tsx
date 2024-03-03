"use client";

import { FieldWrapper, InputField, SubmitButton } from "@/components/form";
import { useAddUserForm } from "./use-add-user-form";

export function AddUserForm() {
  const { errors, dispatch } = useAddUserForm();

  return (
    <form action={dispatch} className="space-y-4">
      <FieldWrapper label="name" errors={errors?.name}>
        <InputField name="name" type="text" required />
      </FieldWrapper>
      <SubmitButton>add</SubmitButton>
    </form>
  );
}
