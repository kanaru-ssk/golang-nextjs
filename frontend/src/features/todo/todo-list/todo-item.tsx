import { Todo } from "@/__generated__/graphql";

type Props = {
  todo: Todo;
};

export function TodoItem({ todo }: Props) {
  return (
    <div>
      <span>{todo.text}</span>
    </div>
  );
}
