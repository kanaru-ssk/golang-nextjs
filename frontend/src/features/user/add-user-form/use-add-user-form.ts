"use client";

import { gql } from "@/__generated__";
import { useMutation } from "@apollo/client";
import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().trim().min(1).max(255),
});

export function useAddUserForm() {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [pending, setPending] = useState(false);
  const [addUserAction] = useMutation(mutation, {
    refetchQueries: ["findUsers"],
  });

  function onChangeName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function onBlurName(e: FocusEvent<HTMLInputElement>) {
    setErrors(validateName(e.target.value));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const errors = validateName(name);
    setErrors(errors);
    if (errors.length > 0) return;

    setPending(true);
    const data = await addUserAction({ variables: { input: { name } } });
    setPending(false);
    if (data.errors) {
      setErrors(data.errors.map((error) => error.message));
    } else {
      setName("");
    }
  }

  return {
    name,
    errors,
    pending,
    onChangeName,
    onBlurName,
    onSubmit,
  };
}

function validateName(name: string) {
  const validatedFields = FormSchema.safeParse({ name });
  if (validatedFields.success) {
    return [];
  } else {
    return validatedFields.error.flatten().fieldErrors.name || [];
  }
}

const mutation = gql(`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`);
