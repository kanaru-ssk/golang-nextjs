import { UserDetail } from "@/features/user";

type Props = {
  params: { userId: string };
};

export default function Page({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl space-y-4 p-4">
      <h2 className="text-2xl">user {params.userId}</h2>
      <UserDetail userId={params.userId} />
    </main>
  );
}
