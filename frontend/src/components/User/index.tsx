import { getUser } from "@/libs/getUser";

export const User = async () => {
  const user = await getUser();

  if (!user) return null;

  return (
    <ul>
      <li>name : {user.name}</li>
      <li>age : {user.age}</li>
    </ul>
  );
};
