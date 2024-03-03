import { AddTodoForm, TodoList, TodosProvider } from "@/features/todo";
import { UserDetail } from "@/features/user";
import { notFound } from "next/navigation";

type Props = {
  params: { userId: string };
};

export default function Page({ params }: Props) {
  const userId = Number(params.userId);
  if (isNaN(userId)) return notFound();

  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h2 className="text-2xl">user {params.userId}</h2>
      <UserDetail userId={userId} />
      <TodosProvider userId={userId}>
        <TodoList />
        <AddTodoForm userId={userId} />
      </TodosProvider>
    </main>
  );
}
