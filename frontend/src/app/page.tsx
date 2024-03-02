import { UsersTable } from "@/features/users-table";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="my-2 text-2xl">users</h1>
      <UsersTable />
    </main>
  );
}
