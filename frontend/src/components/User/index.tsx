import { getUser } from "@/libs/getUser";

export async function User() {
  const user = await getUser();

  if (!user) return null;

  return (
    <ul>
      <li>name : {user.name}</li>
      <li>age : {user.age}</li>
    </ul>
  );
}
