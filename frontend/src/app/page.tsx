import { AddUserForm, UsersTable } from "@/features/user";

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <AddUserForm />
      <h2 className="px-4 text-2xl">users</h2>
      <UsersTable />
    </main>
  );
}
