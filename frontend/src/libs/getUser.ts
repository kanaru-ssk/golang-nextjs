export type User = {
  name: string;
  age: number;
};

export const getUser = async () => {
  const res = await fetch("http://backend:9090");
  if (!res.ok) return null;

  const data = await res.json();

  if ("name" in data && "age" in data) return data as User;

  return null;
};
