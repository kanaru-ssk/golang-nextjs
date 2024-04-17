"use client";

import { FieldWrapper, InputField, SubmitButton } from "@/components/form";
import { useAddTodoForm } from "./use-add-todo-form";

type Props = {
  userId: number;
};

export function AddTodoForm({ userId }: Props) {
  const { text, errors, onBlurName, onChangeName, onSubmit } = useAddTodoForm({
    userId,
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FieldWrapper label="new todo" errors={errors}>
        <InputField
          name="name"
          type="text"
          required
          placeholder="user name"
          value={text}
          hasError={errors.length > 0}
          onBlur={onBlurName}
          onChange={onChangeName}
        />
      </FieldWrapper>
      <input name="userId" type="hidden" value={userId} />
      <SubmitButton>add</SubmitButton>
    </form>
  );
}
