"use client";

import { FC } from "react";
import useTodosQuery from "../../../../../hooks/use-todos-query";

interface TodoCardProps {
  id: number;
}

export const TodoCard: FC<TodoCardProps> = (props): React.ReactNode => {
  const { id } = props;

  const { data: todos, isLoading, isError } = useTodosQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  return (
    <ul>
      <li>{todos?.text}</li>
    </ul>
  );
};
