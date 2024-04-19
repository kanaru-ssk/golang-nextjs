import { Avatar } from "@/components/elements";

type Props = {
  id: number;
  name: string;
};

export function UserCard({ id, name }: Props) {
  return (
    <Avatar>
      <div className="font-medium">
        <div>{name}</div>
        <div className="mt-1 text-sm text-gray-400">@{id}</div>
      </div>
    </Avatar>
  );
}
