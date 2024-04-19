import { AddTodoForm, TodoList } from "@/features/todo";
import { UserInfo } from "@/features/user";
import { notFound } from "next/navigation";

type Props = {
  params: { userId: string };
};

export default function Page({ params }: Props) {
  const userId = Number(params.userId);
  if (isNaN(userId)) return notFound();

  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <UserInfo userId={userId} />
      <TodoList userId={userId} />
      <AddTodoForm userId={userId} />
    </main>
  );
}
