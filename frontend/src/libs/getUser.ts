export type User = {
  name: string;
  age: number;
};

export const getUser = async () => {
  try {
    const res = await fetch("http://backend:8080", { cache: "no-store" });
    if (!res.ok) return null;

    const data = await res.json();

    if ("name" in data && "age" in data) return data as User;

    return null;
  } catch {
    return null;
  }
};
