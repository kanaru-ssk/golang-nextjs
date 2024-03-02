import { AddUserForm } from "@/features/add-user-form";
import { UsersTable } from "@/features/users-table";

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h2 className="text-2xl">users</h2>
      <UsersTable />
      <AddUserForm />
    </main>
  );
}
