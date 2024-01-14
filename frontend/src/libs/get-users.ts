export type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

export const getUsers = async () => {
  try {
    const res = await fetch(`http://backend:${process.env.BACKEND_PORT}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;

    const data = await res.json();

    return data as User[];
  } catch {
    return null;
  }
};
