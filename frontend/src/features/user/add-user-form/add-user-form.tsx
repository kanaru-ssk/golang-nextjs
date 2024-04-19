"use client";

import { SubmitButton, TextInput } from "@/components/form";
import { useAddUserForm } from "./use-add-user-form";

export function AddUserForm() {
  const { name, errors, pending, onBlurName, onChangeName, onSubmit } =
    useAddUserForm();

  return (
    <form onSubmit={onSubmit} className="flex max-w-sm items-start space-x-5">
      <TextInput
        name="name"
        type="text"
        required
        placeholder="user name"
        value={name}
        hasError={errors.length > 0}
        onBlur={onBlurName}
        onChange={onChangeName}
        className="w-full"
        helperText={
          <div role="alert" aria-label="error">
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        }
      />
      <SubmitButton pending={pending}>add</SubmitButton>
    </form>
  );
}
