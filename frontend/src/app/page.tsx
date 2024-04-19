import { AddUserForm, UserList } from "@/features/user";

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 px-5 py-10">
      <UserList />
      <AddUserForm />
    </main>
  );
}
