"use client";

import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";

const FormSchema = z.object({
  text: z.string().trim().min(1).max(255),
});

type Props = {
  userId: number;
};

export function useAddTodoForm({ userId }: Props) {
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [addTodoAction, { data }] = useMutation(mutation);

  function onChangeName(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function onBlurName() {
    setErrors(validateText(text));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = validateText(text);
    setErrors(errors);
    if (errors.length > 0) return;

    const data = await addTodoAction({
      variables: { input: { text, userId } },
    });
    if (data.errors) {
      setErrors(data.errors.map((error) => error.message));
    } else {
      setText("");
    }
  }

  return {
    text,
    errors,
    onChangeName,
    onBlurName,
    onSubmit,
  };
}

function validateText(text: string) {
  const validatedFields = FormSchema.safeParse({ text });
  if (validatedFields.success) {
    return [];
  } else {
    return validatedFields.error.flatten().fieldErrors.text || [];
  }
}

const mutation = gql(`
  mutation createTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      text
      done
    }
  }
`);
