"use server";

import { gql } from "@/__generated__";
import { Todo } from "@/__generated__/graphql";
import { getClient } from "@/libs/apollo-client";
import { z } from "zod";

const FormSchema = z.object({
  text: z.string().trim().min(1).max(255),
  userId: z.preprocess(Number, z.number().int().positive()),
});

export type State = {
  result?: {
    todo?: Todo;
  };
  errors?: {
    text?: string[];
  };
};

export async function addTodoAction(
  _: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    text: formData.get("text"),
    userId: formData.get("userId"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { data } = await getClient().mutate({
    mutation,
    variables: {
      input: {
        text: validatedFields.data.text,
        userId: validatedFields.data.userId,
      },
    },
  });

  return {
    result: {
      todo: data?.createTodo,
    },
  };
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
