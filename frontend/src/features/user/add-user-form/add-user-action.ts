"use server";

import { z } from "zod";
import { gql } from "@/__generated__";
import { getClient } from "@/libs/apollo-client";
import { User } from "@/__generated__/graphql";

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
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
  });

  console.log("submit", validatedFields);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));

  const { data } = await getClient().mutate({
    mutation,
    variables: { input: { name: validatedFields.data.name } },
  });

  console.log("success", data);

  return {
    result: {
      user: data?.createUser,
    },
  };
}

const mutation = gql(`
  mutation createUser($input: NewUser!) {
    createUser(input: $input) {
      id
      name
    }
  }
`);
