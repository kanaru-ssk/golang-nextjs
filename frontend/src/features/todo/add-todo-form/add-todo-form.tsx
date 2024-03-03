"use client";

import { FieldWrapper, InputField, SubmitButton } from "@/components/form";
import { useAddTodoForm } from "./use-add-todo-form";

type Props = {
  userId: number;
};

export function AddTodoForm({ userId }: Props) {
  const { errors, dispatch } = useAddTodoForm();

  return (
    <form action={dispatch} className="space-y-4">
      <FieldWrapper label="new todo" errors={errors?.text}>
        <InputField name="text" type="text" required />
      </FieldWrapper>
      <input name="userId" type="hidden" value={userId} />
      <SubmitButton>add</SubmitButton>
    </form>
  );
}
