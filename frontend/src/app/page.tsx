import { AddUserForm, UsersTable } from "@/features/user";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="my-2 text-2xl">users</h1>
      <UsersTable />
      <AddUserForm />
    </main>
  );
}
