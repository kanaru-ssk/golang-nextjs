"use server";

import { gql } from "@/__generated__";
import { User } from "@/__generated__/graphql";
import { getClient } from "@/libs/apollo-client";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().trim().min(1).max(255),
});

export type State = {
  result?: {
    user?: User;
  };
  errors?: {
    name?: string[];
  };
};

export async function addUserAction(
  _: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { data } = await getClient().mutate({
    mutation,
    variables: { input: { name: validatedFields.data.name } },
  });

  return {
    result: {
      user: data?.createUser,
    },
  };
}

const mutation = gql(`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`);
