"use client";

import { FieldWrapper, InputField, SubmitButton } from "@/components/form";
import { useAddUserForm } from "./use-add-user-form";

export function AddUserForm() {
  const { name, errors, onBlurName, onChangeName, onSubmit } = useAddUserForm();

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FieldWrapper errors={errors}>
        <InputField
          name="name"
          type="text"
          required
          placeholder="user name"
          value={name}
          hasError={errors.length > 0}
          onBlur={onBlurName}
          onChange={onChangeName}
        />
      </FieldWrapper>
      <SubmitButton>add</SubmitButton>
    </form>
  );
}
