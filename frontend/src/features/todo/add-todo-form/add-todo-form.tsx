"use client";

import { SubmitButton, TextInput } from "@/components/form";
import { useAddTodoForm } from "./use-add-todo-form";

type Props = {
  userId: number;
};

export function AddTodoForm({ userId }: Props) {
  const { text, errors, pending, onBlurName, onChangeName, onSubmit } =
    useAddTodoForm({
      userId,
    });

  return (
    <form onSubmit={onSubmit} className="flex max-w-sm items-start space-x-5">
      <TextInput
        name="name"
        type="text"
        required
        placeholder="user name"
        value={text}
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
      <input name="userId" type="hidden" value={userId} />
      <SubmitButton pending={pending}>add</SubmitButton>
    </form>
  );
}
