import { Checkbox } from "@/components/form";

type Props = {
  text: string;
  done: boolean;
};

export function TodoItem({ text, done }: Props) {
  return (
    <div className="space-x-4">
      <Checkbox checked={done} />
      <span>{text}</span>
    </div>
  );
}
