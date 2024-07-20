import { useQuery } from "@tanstack/react-query";
import { getTodoById } from "../queries/get-todo-by-id";
import useSupabase from "./use-supabase";

function useTodosQuery(todoId: number) {
  const client = useSupabase();
  const queryKey = ['todos', todoId];
 
  const queryFn = async () => {
    return getTodoById(client, todoId)?.then(
      (result) => result.data
    );
  };
 
  return useQuery({ queryKey, queryFn });
}
 
export default useTodosQuery;