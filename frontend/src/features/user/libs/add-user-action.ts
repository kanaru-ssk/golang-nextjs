import { z } from "zod";

// TODO: バリデーション緩いので条件追加する
const FormSchema = z.object({
  email: z.string().email("メールアドレス形式が正しくありません"),
  password: z.string(),
});

export type State =
  | {
      email?: string[];
      password?: string[];
    }
  | undefined;

export async function addUserAction(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  console.log("submit", validatedFields);

  if (!validatedFields.success) {
    return validatedFields.error.flatten().fieldErrors;
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("success");
}
