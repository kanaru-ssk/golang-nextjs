"use client";

import { useContext, useEffect } from "react";
import { useFormState } from "react-dom";
import { TodosContext } from "../todos-context/todos-context";
import { addTodoAction } from "./add-todo-action";

export function useAddTodoForm() {
  const [state, dispatch] = useFormState(addTodoAction, {});
  const { todos, setTodos } = useContext(TodosContext);
  useEffect(() => {
    if (
      state.result?.todo &&
      !todos.some((todo) => todo.id === state.result?.todo?.id)
    ) {
      setTodos([...todos, state.result.todo]);
    }
    console.log(state);
  }, [state, todos, setTodos]);

  return {
    errors: state.errors,
    dispatch,
  };
}
